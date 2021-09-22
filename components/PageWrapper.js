import Header from './Header'
import Footer from './Footer'

const PageWrapper = ({ children }) => {
  return (
    <div>
      <Header />
      <div id='page-wrapper' className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
        <main className='mb-auto relative z-10'>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default PageWrapper
