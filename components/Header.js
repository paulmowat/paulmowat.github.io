import siteMetadata from '@/config/siteMetadata'
import headerNavLinks from '@/config/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

export default function Header () {
  return (
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-900 py-6'>
      <div className='flex justify-between'>
        <div>
          <Link href='/'>
            <div className=''>
              <div className='sm:block text-3xl font-semibold'>
                {siteMetadata.headerTitle}
              </div>
            </div>
          </Link>
        </div>
        <div className='items-center text-base leading-5 inline-flex'>
          <div className='hidden sm:inline-block'>
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
      </div>
    </header>
  )
}
