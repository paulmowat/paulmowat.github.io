import siteMetadata from '@/config/siteMetadata'
import headerNavLinks from '@/config/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className='flex flex-col justify-between h-screen'>
        <header className='flex items-center justify-between py-10'>
          <div>
            <Link href='/'>
              <div className='flex items-center justify-between'>
                <div className='sm:block text-3xl font-semibold'>
                  {siteMetadata.headerTitle}
                </div>
              </div>
            </Link>
          </div>
          <div className='flex items-center text-base leading-5'>
            <div className='hidden sm:block'>
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className='p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100 text-2xl'
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
