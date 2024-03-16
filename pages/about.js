import PageWrapper from '@/components/PageWrapper'
import { PageSEO } from '@/components/SEO'

import siteMetadata from '@/config/siteMetadata'
import Link from '@/components/Link'

export default function About () {
  return (
    <>
      <PageWrapper>
        <PageSEO
          title='About'
          description="Hey, I'm Paul Mowat. I'm a developer based near Aberdeen Scotland who currently works for OneAdvanced as an Principal Devops Architect."
        />
        <main id='about' className='divide-y'>
          <h1 className='pageTitle'>
            About
          </h1>
          <section className='main xl:grid-cols-3'>
            <div className='avatar'>
              <img src={siteMetadata.image} alt='avatar' />
            </div>
            <div className='content'>
              <p>
                Based near Aberdeen Scotland, I currently work for <Link href='https://www.oneadvanced.com'>OneAdvanced</Link> as an Principal DevOps Architect.
              </p>
              <p>
                I'm a hardworking, organized and motivated software architect with 16+ years
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
          </section>
        </main>
      </PageWrapper>
    </>
  )
}
