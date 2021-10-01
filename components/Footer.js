import siteMetadata from '@/config/siteMetadata'
import SvgIcon from '@/components/svgs'

import NowPlaying from '@/components/NowPlaying'

export default function Footer () {
  return (
    <footer className='text-sm py-6'>
      <div className='border-t flex flex-col items-center pt-6'>
        <div className='flex mb-4 space-x-2'>
          <NowPlaying />
        </div>
        <div className='flex mb-4 space-x-4'>
          <SvgIcon kind='twitter' href={siteMetadata.twitter} title='Twitter' target='_blank' />
          <SvgIcon kind='github' href={siteMetadata.github} title='Github' target='_blank' />
          <SvgIcon kind='youtube' href={siteMetadata.youtube} title='Youtube' target='_blank' />
          <SvgIcon kind='linkedin' href={siteMetadata.linkedin} title='LinkedIn' target='_blank' />
          <SvgIcon kind='rss' href='/rss.xml' title='RSS' />
        </div>
        <div className='text-center'>
          <p>All views are my own and do not represent my employer in any way.</p>
        </div>
        <div className='flex mt-2 mb-2 space-x-2'>
          <div>{`© Copyright ${new Date().getFullYear()}`}</div>
          <div>{' • '}</div>
          <div>{siteMetadata.author}</div>
        </div>
      </div>
    </footer>
  )
}
