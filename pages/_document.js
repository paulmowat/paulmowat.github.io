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
          <meta name='description' content='Paul Mowat is an developer based in Boddam/Aberdeen Scotland who currently works for Advanced as a Principal Devops Architect.' />
          <meta name='format-detection' content='telephone=no' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='msapplication-config' content='/static/icons/browserconfig.xml' />
          <meta name='msapplication-TileColor' content='#2B5797' />
          <meta name='msapplication-tap-highlight' content='no' />
          <meta name='theme-color' content='#000000' />

          <link rel='apple-touch-icon' href='/static/icons/touch-icon-iphone.png' />
          <link rel='apple-touch-icon' sizes='152x152' href='/static/icons/touch-icon-ipad.png' />
          <link rel='apple-touch-icon' sizes='180x180' href='/static/icons/touch-icon-iphone-retina.png' />
          <link rel='apple-touch-icon' sizes='167x167' href='/static/icons/touch-icon-ipad-retina.png' />

          <link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png' />
          <link rel='manifest' href='/static/manifest.json' />
          <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500' />

          <meta name='twitter:card' content='summary' />
          <meta name='twitter:url' content='https://www.paulmowat.co.uk' />
          <meta name='twitter:title' content='Paul Mowat' />
          <meta name='twitter:description' content='Paul Mowat is an developer based in Boddam/Aberdeen Scotland who currently works for Advanced as a Principal Devops Architect.' />
          <meta name='twitter:image' content='https://www.paulmowat.co.uk/static/icons/android-chrome-192x192.png' />
          <meta name='twitter:creator' content='@paul_mowat' />
          <meta property='og:type' content='website' />
          <meta property='og:title' content='Paul Mowat' />
          <meta property='og:description' content='Paul Mowat is an developer based in Boddam/Aberdeen Scotland who currently works for Advanced as a Principal Devops Architect.' />
          <meta property='og:site_name' content='Paul Mowat' />
          <meta property='og:url' content='https://www.paulmowat.co.uk' />
          <meta property='og:image' content='https://www.paulmowat.co.uk/static/icons/apple-touch-icon.png' />

          <link rel='alternate' type='application/rss+xml' href='/index.xml' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />

          <link
            href='https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
            rel='stylesheet'
          />
          <link
            rel='preload'
            href='https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/fonts/KaTeX_Main-Regular.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/fonts/KaTeX_Math-Italic.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/fonts/KaTeX_Size2-Regular.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='preload'
            href='https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/fonts/KaTeX_Size4-Regular.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <link
            rel='stylesheet'
            href='https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css'
            integrity='sha384-t5CR+zwDAROtph0PXGte6ia8heboACF9R5l/DiY+WZ3P2lxNgvJkQk5n7GPvLMYw'
            crossOrigin='anonymous'
          />
        </Head>
        <body className='antialiased text-black bg-white dark:bg-gray-900 dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
