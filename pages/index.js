import HomeWrapper from '@/components/HomeWrapper'
import { PageSeo } from '@/components/SEO'

import siteMetadata from '@/config/siteMetadata'

import SvgIcon from '@/components/svgs'

export default function Home ({ posts }) {
  return (
    <>
      <HomeWrapper>
        <PageSeo
          title={siteMetadata.title}
          description={siteMetadata.description}
          url={siteMetadata.siteUrl}
        />
        <section id='home' className='divide-y'>
          <div className='banner  h-screen'>
            <div className='w-full'>
              <h1 className='pageTitle'>
                Hey, I'm Paul
              </h1>
              <p className='pt-5 text-3xl leading-relaxed text-gray-500 dark:text-gray-400 sm:text-4xl sm:leading-relaxed  md:text-4xl md:leading-relaxed '>
                I'm a software architect based in North East Scotland who currently works for{' '}
                <a href='https://www.oneadvanced.com' className='underline'>Advanced</a> as a Principal DevOps Architect.
              </p>
              {/* <div className='pt-3 pb-5 space-y-2 md:space-y-5 flex-auto sm:pt-12'>
                <img src={siteMetadata.image} alt='avatar' className='w-48 h-48 rounded-full' />
              </div> */}
              <div>
                <SvgIcon kind='arrow-down' href='#main' />
              </div>
            </div>
          </div>
          <div id='main' className='main'>
            <p>main</p>
          </div>
        </section>
      </HomeWrapper>
    </>
  )
}
