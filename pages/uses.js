import PageWrapper from '@/components/PageWrapper'
import { PageSeo } from '@/components/SEO'

import siteMetadata from '@/config/siteMetadata'
import Link from '@/components/Link'

export default function Uses () {
  return (
    <>
      <PageWrapper>
        <PageSeo
          title={`Uses - ${siteMetadata.author}`}
          description={`Uses - ${siteMetadata.author}`}
          url={`${siteMetadata.siteUrl}/uses`}
        />
        <main id='uses' className='divide-y'>
          <h1 className='pageTitle'>
            Uses
          </h1>
          <section className='main'>
            <p className='info'>
              Below is what I use on a daily basis for work and development.
            </p>
            <div className='section '>
              <h2>
                <span>Editor, Theme &amp; Extensions</span>
              </h2>
              <div>
                <ul>
                  <li><Link href='https://code.visualstudio.com/'>Visual Studio Code</Link> is my primary editor of choice.</li>
                  <li><Link href='https://marketplace.visualstudio.com/items?itemName=freeCodeCamp.freecodecamp-dark-vscode-theme'>Free Code Camp Dark Theme.</Link></li>
                  <li>A number of extensions
                    <ul>
                      <li><Link href='https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag'>Auto Close Tag</Link></li>
                      <li><Link href='https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag'>Auto Rename Tag</Link></li>
                      <li><Link href='https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner'>Code Runner</Link></li>
                      <li><Link href='https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker'>Code Spell Checker</Link></li>
                      <li><Link href='https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker'>Docker</Link></li>
                      <li><Link href='https://marketplace.visualstudio.com/items?itemName=kiteco.kite'>Kite</Link></li>
                      <li><Link href='https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer'>Live Server</Link></li>
                      <li><Link href='https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script'>NPM</Link></li>
                      <li><Link href='https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense'>NPM Intellisense</Link></li>
                      <li><Link href='https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers'>Remote - Containers</Link></li>
                      <li><Link href='https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl'>Remote WSL</Link></li>
                      <li><Link href='https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard'>StandardJS</Link></li>
                      <li><Link href='https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode'>Visual Studio IntelliCode</Link></li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className='section'>
              <h2>
                <span>Applications</span>
              </h2>
              <div>
                <ul>
                  <li><Link href='https://www.google.com/intl/en_uk/chrome/'>Chrome</Link> for browsing.</li>
                  <li><Link href='https://www.scootersoftware.com/'>Beyond Compare</Link> for file/directory comparisons.</li>
                  <li><Link href='https://dbeaver.io/'>DBeaver</Link> for working with databases.</li>
                  <li><Link href='https://tortoisegit.org/'>TortoiseGit</Link> for working with Github.</li>
                  <li><Link href='https://www.postman.com/'>Postman</Link> for API testing.</li>
                  <li><Link href='https://www.docker.com/'>Docker</Link> for containerization.</li>
                </ul>
              </div>
            </div>
            <div className='section'>
              <h2>
                <span>Desk Setup</span>
              </h2>
              <div>
                <ul>
                  <li>Three Dell Monitors. 2 x 24 inch, 1 x 18 inch</li>
                  <li><Link href='https://www.dell.com/en-uk/work/shop/laptop-computers-for-businesses/latitude-5410-build-your-own/spd/latitude-14-5410-laptop/gxctol541014emea'>Dell Latitude 5410 Laptop</Link></li>
                  <li><Link href='https://www.logitech.com/en-gb/products/webcams/c922-pro-stream-webcam.html'>Logitech C922 Webcam</Link></li>
                  <li><Link href='https://www.tonormic.com/products/tonor-q9-usb-microphone-kit'>Tonor Q9 USB Microphone Kit</Link></li>
                  <li>Dell Docking Station to connect everything up</li>
                  <li><Link href='https://store.google.com/gb/product/google_nest_mini?hl=en-GB'>Google Nest Mini</Link> speaker for listening to Spotify.</li>
                  <li>HP Color LaserJet Pro MFP M177fw Printer/Scanner</li>
                </ul>
              </div>
            </div>
            <div className='section'>
              <h2>
                <span>Tech Stack</span>
              </h2>
              <div>
                <ul>
                  <li>Primary Node.js/Javascript, But experience in OpenEdge, Java, C# and many others.</li>
                  <li>Amazon Web Services. Mostly via AWS CLI, AWS SAM CLI and CloudFormation.</li>
                  <li>Docker for running things locally like Lambdas/Redis/Databases.</li>
                </ul>
              </div>
            </div>
            <div className='section'>
              <h2>
                <span>Website</span>
              </h2>
              <div>
                <ul>
                  <li><Link href='https://nextjs.org'>Next.js</Link> is the framework that powers the site.</li>
                  <li><Link href='https://tailwindcss.com'>TailwindCSS</Link> is used for making it look good.</li>
                  <li><Link href='https://github.com/'>Github</Link> for Source Code Management and Continuous Integration.</li>
                  <li><Link href='https://vercel.com/'>Vercel</Link> for hosting and Continuous Delivery.</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </PageWrapper>
    </>
  )
}
