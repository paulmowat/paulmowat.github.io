import siteMetadata from '@/config/siteMetadata'
import { PageSeo } from '@/components/SEO'

export default function About () {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className='divide-y'>
        <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
          <h1 className='text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
            About
          </h1>
        </div>
        <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
          <div className='flex flex-col items-center pt-8 space-x-2'>
            <img src={siteMetadata.image} alt='avatar' className='w-48 h-48 rounded-full' />
          </div>
          <div className='pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2'>
            <p>
              Based in Boddam (near Aberdeen), Scotland, I currently work for <a href='http://www.oneadvanced.com'>Advanced</a> as a Principal DevOps Architect.
            </p>
            <p>
              I'm a hardworking, organized and motivated software architect with 15+ years
              experience designing and supporting large scale enterprise applications on a variety
              of platforms and technologies including AWS, Node.js, Progress OpenEdge, C#,
              SQL Server and Java.
            </p>
            <p>
              I have strong problem solving skills and am an advocate of best practices and coding
              standards. I believe if your going to do something, then do it to the best of your
              abilities.
            </p>
            <p>
              I enjoy working within a team and have experience leading teams of developers using
              traditional and agile methodologies to meet tight deadlines.
            </p>
            <p>
              During my spare time, I also seek to continually improve my skills and knowledge and
              as such I enjoy learning about new emerging technologies. I'm always playing around
              with something looking to see what benefits it could bring.
            </p>
            <p>
              My other interests include gaming on the PS5, watching movies and spending as much time as possible with my wife
              and two sons.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
