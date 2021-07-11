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
        <div className='items-start space-y-2'>

          <div className='prose dark:prose-dark max-w-none mt-8 mb-8'>
            <div className='prose dark:prose-dark max-w-none'>
              <p className='info'>
                Below is what I use on a daily basis.
              </p>
            </div>
          </div>

          <div className='prose dark:prose-dark max-w-none pb-4'>
            <h2>
              <span>Editor</span>
            </h2>
            <div className='prose dark:prose-dark max-w-none'>
              <ul>
                <li>
                  Visual Studio Code is my primary editor of choice
                </li>
                <li>
                  I use the Fira Code font
                </li>
                <li>
                  A number of extensions
                </li>
              </ul>
            </div>
          </div>

          <div className='prose dark:prose-dark max-w-none pb-4'>
            <h2>
              <span>Applications</span>
            </h2>
            <div className='prose dark:prose-dark max-w-none'>
              <ul>
                <li>
                  Chrome for browsing
                </li>
                <li>
                  Beyond Compare for file/directory comparisons
                </li>
                <li>
                  DBeaver for working with databases
                </li>
                <li>
                  TortoiseGit for working with Github
                </li>
                <li>
                  Postman for API testing
                </li>
                <li>
                  Docker for containerization
                </li>
              </ul>
            </div>
          </div>

          <div className='prose dark:prose-dark max-w-none pb-4'>
            <h2>
              <span>Desk Setup</span>
            </h2>
            <div className='prose dark:prose-dark max-w-none'>
              <ul>
                <li>
                  Three Dell Monitors. 2 x 24 inch, 1 x 18 inch
                </li>
                <li>
                  Dell Latitude 5410 Laptop
                </li>
                <li>
                  Dell Docking Station to connect everything up
                </li>
                <li>
                  Google Home speaker for listening to Spotify
                </li>
                <li>
                  HP Color LaserJet Pro MFP M177fw Printer/Scanner
                </li>
              </ul>
            </div>
          </div>

          <div className='prose dark:prose-dark max-w-none'>
            <h2>
              <span>Tech Stack</span>
            </h2>
            <div className='prose dark:prose-dark max-w-none'>
              <ul>
                <li>
                  Node.js/Javascript
                </li>
                <li>
                  Amazon Web Services. Mostly via AWS CLI, AWS SAM CLI and CloudFormation
                </li>
                <li>
                  Docker for running things locally like Lambdas/Redis/Databases
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
