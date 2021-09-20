import Header from './Header'
import Footer from './Footer'

const HomeWrapper = ({ children }) => {
  return (
    <div id='home-wrapper' className='max-w-3xl px-4 mx-auto sm:px-6 xl:max-w-5xl xl:px-0'>
      <Header />
      <main className='mb-auto relative z-10'>{children}</main>
      <Footer />
    </div>
  )
}

export default HomeWrapper
