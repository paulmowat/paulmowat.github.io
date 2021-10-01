import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/config/headerNavLinks'

import siteMetadata from '@/config/siteMetadata'
import SvgIcon from '@/components/svgs'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className='sm:hidden bg-blue-600 border border-transparent rounded-lg'>
      <button
        type='button'
        className='w-8 h-8 pt-1 ml-1 mr-1 rounded'
        aria-label='Toggle Menu'
        onClick={onToggleNav}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          {navShow
            ? (
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
              )
            : (
              <path
                fillRule='evenodd'
                d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                clipRule='evenodd'
              />
              )}
        </svg>
      </button>
      <div
        className={`fixed w-full h-full top-24 right-0 mobile-nav opacity-95 z-10 transform ease-in-out duration-300 ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type='button'
          aria-label='toggle modal'
          className='fixed w-full h-full cursor-auto focus:outline-none'
          onClick={onToggleNav}
        />
        <nav className='fixed h-full mt-8'>
          <div key='home' className='px-12 py-4'>
            <Link
              href='/'
              className='text-2xl font-bold tracking-widest hover:text-blue-400'
              onClick={onToggleNav}
            >
              Home
            </Link>
          </div>
          {headerNavLinks.map((link) => (
            <div key={link.title} className='px-12 py-4'>
              <Link
                href={link.href}
                className='text-2xl font-bold tracking-widest hover:text-blue-400'
                onClick={onToggleNav}
              >
                {link.title}
              </Link>
            </div>
          ))}
          <div className='border-t flex space-x-4 fixed w-5/6 h-full mx-12 mt-4 py-5'>
            <SvgIcon kind='twitter' href={siteMetadata.twitter} title='Twitter' target='_blank' />
            <SvgIcon kind='github' href={siteMetadata.github} title='Github' target='_blank' />
            <SvgIcon kind='youtube' href={siteMetadata.youtube} title='Youtube' target='_blank' />
            <SvgIcon kind='linkedin' href={siteMetadata.linkedin} title='LinkedIn' target='_blank' />
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MobileNav