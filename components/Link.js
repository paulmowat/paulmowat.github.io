import Link from 'next/link'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('./'))
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <Link href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target='_blank' rel='noopener noreferrer' href={href} {...rest} />
}

export default CustomLink
