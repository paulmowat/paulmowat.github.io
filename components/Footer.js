import Link from './Link'
import siteMetadata from '@/config/siteMetadata'
import SvgIcon from '@/components/svgs'

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-16">
        <div className="flex mb-3 space-x-4">
          <SvgIcon kind="github" href={siteMetadata.github} />
          <SvgIcon kind="facebook" href={siteMetadata.facebook} />
          <SvgIcon kind="linkedin" href={siteMetadata.linkedin} />
          <SvgIcon kind="twitter" href={siteMetadata.twitter} />
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  )
}
