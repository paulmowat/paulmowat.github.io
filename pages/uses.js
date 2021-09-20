import PageWrapper from '@/components/PageWrapper'
import { PageSeo } from '@/components/SEO'

import siteMetadata from '@/config/siteMetadata'

export default function Uses () {
  return (
    <>
      <PageWrapper>
        <PageSeo
          title={`Uses - ${siteMetadata.author}`}
          description={`Uses - ${siteMetadata.author}`}
          url={`${siteMetadata.siteUrl}/uses`}
        />
        <section id='uses' className='divide-y'>
          <h1 className='pageTitle'>
            Uses
          </h1>
          <div className='main'>
            <p className='info'>
              Below is what I use on a daily basis for work and development.
            </p>
            <div className='section '>
              <h2>
                <span>Editor</span>
              </h2>
              <div>
                <ul>
                  <li><a href='https://code.visualstudio.com/'>Visual Studio Code</a> is my primary editor of choice</li>
                  <li>A number of extensions
                    <ul>
                      <li><a href='https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag'>Auto Close Tag</a></li>
                      <li><a href='https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag'>Auto Rename Tag</a></li>
                      <li><a href='https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner'>Code Runner</a></li>
                      <li><a href='https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker'>Code Spell Checker</a></li>
                      <li><a href='https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker'>Docker</a></li>
                      <li><a href='https://marketplace.visualstudio.com/items?itemName=kiteco.kite'>Kite</a></li>
                      <li><a href='https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer'>Live Server</a></li>
                      <li><a href='https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script'>NPM</a></li>
                      <li><a href='https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense'>NPM Intellisense</a></li>
                      <li><a href='https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers'>Remote - Containers</a></li>
                      <li><a href='https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl'>Remote WSL</a></li>
                      <li><a href='https://marketplace.visualstudio.com/items?itemName=standard.vscode-standard'>StandardJS</a></li>
                      <li><a href='https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode'>Visual Studio IntelliCode</a></li>
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
                  <li><a href='https://www.google.com/intl/en_uk/chrome/'>Chrome</a> for browsing</li>
                  <li><a href='https://www.scootersoftware.com/'>Beyond Compare</a> for file/directory comparisons</li>
                  <li><a href='https://dbeaver.io/'>DBeaver</a> for working with databases</li>
                  <li><a href='https://tortoisegit.org/'>TortoiseGit</a> for working with Github</li>
                  <li><a href='https://www.postman.com/'>Postman</a> for API testing</li>
                  <li><a href='https://www.docker.com/'>Docker</a> for containerization</li>
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
                  <li><a href='https://www.dell.com/en-uk/work/shop/laptop-computers-for-businesses/latitude-5410-build-your-own/spd/latitude-14-5410-laptop/gxctol541014emea'>Dell Latitude 5410 Laptop</a></li>
                  <li><a href='https://www.logitech.com/en-gb/products/webcams/c922-pro-stream-webcam.html'>Logitech C922 Webcam</a></li>
                  <li><a href='https://www.tonormic.com/products/tonor-q9-usb-microphone-kit'>Tonor Q9 USB Microphone Kit</a></li>
                  <li>Dell Docking Station to connect everything up</li>
                  <li><a href='https://store.google.com/gb/product/google_nest_mini?hl=en-GB'>Google Nest Mini</a> speaker for listening to Spotify</li>
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
                  <li>Amazon Web Services. Mostly via AWS CLI, AWS SAM CLI and CloudFormation</li>
                  <li>Docker for running things locally like Lambdas/Redis/Databases</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </PageWrapper>
    </>
  )
}
