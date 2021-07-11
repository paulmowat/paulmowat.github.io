import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'
import Download from './download.svg'
import RSS from './rss.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  download: Download,
  rss: RSS
}

const SvgIcon = ({ kind, href, size = 8 }) => {
  if (!href) return null

  const SvgIcon = components[kind]

  return (
    <a
      className='text-sm text-gray-500 transition hover:text-gray-600'
      target='_blank'
      rel='noopener noreferrer'
      href={href}
      title={kind}
    >
      <span className='sr-only'>{kind}</span>
      <SvgIcon
        className={`fill-current text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
      <span className='sr-only'>{kind}</span>
    </a>
  )
}

export default SvgIcon
