import siteMetadata from '@/config/siteMetadata'
import SvgIcon from '@/components/svgs'
import { PageSeo } from '@/components/SEO'

export default function About() {
  return (
    <>
      <PageSeo
        title={`About - ${siteMetadata.author}`}
        description={`About me - ${siteMetadata.author}`}
        url={`${siteMetadata.siteUrl}/about`}
      />
      <div className="divide-y">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8 space-x-2">
            <img src={siteMetadata.image} alt="avatar" className="w-48 h-48 rounded-full" />
            {/* <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              {siteMetadata.author}
            </h3> */}
            {/* <div className="text-gray-500 dark:text-gray-400">Professor of Atmospheric Science</div>
            <div className="text-gray-500 dark:text-gray-400">Stanford University</div> */}
            <div className="flex pt-6 space-x-3">
              <SvgIcon kind="github" href={siteMetadata.github} />
              <SvgIcon kind="facebook" href={siteMetadata.facebook} />
              <SvgIcon kind="linkedin" href={siteMetadata.linkedin} />
              <SvgIcon kind="twitter" href={siteMetadata.twitter} />
            </div>
          </div>
          <div className="pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2">
            <p>
              Based in Boddam/Aberdeen, Scotland, I currently work for{' '}
              <a href="http://www.oneadvanced.com">Advanced</a> as a Software Architect.
            </p>
            <p>
              I'm a hardworking, organized and motivated software developer with 10+ years
              experience designing and supporting large scale enterprise applications on a variety
              of platforms and technologies including AWS, Node.js, React, Progress OpenEdge, C#,
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
              with emerging technologies and frameworks.
            </p>
            <p>
              My other interests include photography, watching movies and spending time with my wife
              and son.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
