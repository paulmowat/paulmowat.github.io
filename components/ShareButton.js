import Facebook from './svgs/facebook.svg'
import Linkedin from './svgs/linkedin.svg'
import Twitter from './svgs/twitter.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter
}

const openWindow = (kind, href) => {
  window.open(href, `${kind} share`, 'width=490,height=530')
}

const ShareButton = ({ id, kind, label, title, href }) => {
  const SvgIcon = components[kind]

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(href)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(href)}&title=${encodeURIComponent(title)}`,
    twitter: `https://twitter.com/share?text=${encodeURIComponent(title)}&url=${encodeURIComponent(href)}`
  }

  return (
    <a
      className='px-2 py-0.5 text-gray-100 no-underline transition btn w-44'
      target='_blank'
      rel='noopener noreferrer'
      // href={shareUrls[kind]}
      title={title}
      onClick={() => openWindow(kind, shareUrls[kind])}
    >
      <SvgIcon className='inline w-8 h-8 p-1 fill-current' />
      <span className='pl-1'>{label}</span>
    </a>
  )
}

export default ShareButton
