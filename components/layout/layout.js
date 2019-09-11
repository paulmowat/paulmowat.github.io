import React from 'react'
import PropTypes from 'prop-types'

import { HeadLayout } from '../header'
import { NavbarTop } from '../navbar'

import { MainContainer } from './main-container'
import { Footer } from '../footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../../sass/paulmowat.scss'

export function Layout (props) {
  return (
    <>
      <HeadLayout title={props.title} />
      {/* <AppIcons /> */}
      <div className='page sidebar-visible'>
        <header>
          <NavbarTop url={props.url} />
        </header>
        <div className='content-container'>
          <MainContainer>
            <section>
              {props.children}
            </section>
          </MainContainer>
        </div>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  url: PropTypes.object
}
