import siteMetadata from '@/config/siteMetadata'
import { PageSeo } from '@/components/SEO'

export default function Uses () {
  return (
    <>
      <PageSeo
        title={`Uses - ${siteMetadata.author}`}
        description={`Uses - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/uses`}
      />
      <div className='divide-y'>
        <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            Uses
          </h1>
        </div>
        <div className=''>
          <p>Check out https://uses.tech/</p>
          <h2>Editor</h2>
          <h2>Applications</h2>
          <h2>Desk Setup</h2>
          <h2>Tech Stack</h2>
        </div>
      </div>
    </>
  )
}
