import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render () {
    return (
      <Html lang='en'>
        <Head>
          <meta name='application-name' content='Paul Mowat' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-status-bar-style' content='default' />
          <meta name='apple-mobile-web-app-title' content='Paul mowat' />
          <meta name='description' content='Paul Mowat is an developer based near Aberdeen Scotland who currently works for Advanced as a Principal Devops Architect.' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/favicons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link rel='apple-touch-icon' href='/static/favicons/apple-touch-icon.png' />

          <link rel='icon' type='image/png' sizes='32x32' href='/static/favicons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/favicons/favicon-16x16.png' />

          <link rel='manifest' href='/static/manifest.json' />

          <link rel='mask-icon' href='/static/favicons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/static/favicons/favicon.ico' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://www.paulmowat.co.uk' />
          <meta name='twitter:title' content='Paul Mowat' />
          <meta name='twitter:description' content='Paul Mowat is an developer based near Aberdeen Scotland who currently works for Advanced as a Principal Devops Architect.' />
          <meta name='twitter:image' content='https://www.paulmowat.co.uk/static/icons/android-chrome-192x192.png' />
          <meta name='twitter:creator' content='@paul_mowat' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Paul Mowat' />
          <meta property='og:description' content='Paul Mowat is an developer based near Aberdeen Scotland who currently works for Advanced as a Principal Devops Architect.' />
          <meta property='og:site_name' content='Paul Mowat' />
          <meta property='og:url' content='https://www.paulmowat.co.uk' />
          <meta property='og:image' content='https://www.paulmowat.co.uk/static/icons/apple-touch-icon.png' />

          <link rel='alternate' type='application/rss+xml' href='/index.xml' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />

          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
            rel='stylesheet'
          />
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=UA-45992131-1'
          />
          <script
            dangerouslySetInnerHTML={{
              __html:
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-45992131-1', {
              page_path: window.location.pathname,
            });
            `
            }}
          />
        </Head>
        <body className='bg'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
