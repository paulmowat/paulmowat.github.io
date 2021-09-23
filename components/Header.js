import siteMetadata from '@/config/siteMetadata'
import headerNavLinks from '@/config/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'

export default function Header () {
  return (
    <header className='sticky top-0 z-50 py-6 px-4 sm:px-6 nav'>
      <nav className='flex justify-between items-center'>
        <div className='flex justify-center items-center'>
          <Link href='/' className='hover:text-blue-400'>
            <div className=''>
              <div className='sm:block text-3xl font-semibold'>
                {siteMetadata.headerTitle}
              </div>
            </div>
          </Link>
        </div>
        <div className='flex items-center text-base leading-5'>
          <div className='hidden sm:inline-block'>
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className='p-1 font-medium sm:mx-4 text-2xl hover:text-blue-400'
              >
                {link.title}
              </Link>
            ))}
          </div>
          <MobileNav />
        </div>
      </nav>
    </header>
  )
}
