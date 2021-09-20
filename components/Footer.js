import siteMetadata from '@/config/siteMetadata'
import SvgIcon from '@/components/svgs'

export default function Footer () {
  return (
    <footer className='border-t text-sm text-gray-500 dark:text-gray-400 mt-5'>
      <div className='flex flex-col items-center mt-6'>
        <div className='flex mb-3 space-x-4'>
          <SvgIcon kind='twitter' href={siteMetadata.twitter} />
          <SvgIcon kind='github' href={siteMetadata.github} />
          <SvgIcon kind='youtube' href={siteMetadata.youtube} />
          <SvgIcon kind='linkedin' href={siteMetadata.linkedin} />
          <SvgIcon kind='rss' href='/rss.xml' />
        </div>
        <div className='text-center'>
          <p>All views are my own and do not represent my employer in any way.</p>
        </div>
        <div className='flex mb-2 space-x-2'>
          <div>{`© Copyright ${new Date().getFullYear()}`}</div>
          <div>{' • '}</div>
          <div>{siteMetadata.author}</div>
        </div>
      </div>
    </footer>
  )
}
