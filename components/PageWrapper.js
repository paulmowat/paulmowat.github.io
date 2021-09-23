import Header from './Header'
import Footer from './Footer'

const PageWrapper = ({ children }) => {
  return (
    <div className='relative min-h-screen'>
      <Header />
      <div id='page-wrapper' className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
        <main className='mb-auto relative z-10'>{children}</main>
        <Footer />
      </div>

    </div>
  )
}

export default PageWrapper
