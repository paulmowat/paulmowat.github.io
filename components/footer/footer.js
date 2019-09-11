import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

export class Footer extends React.Component {
  render () {
    return (
      <footer>
        <div className='row'>
          <div className='col-md-12'>
            <ul className='social'>
              <li><a href='https://www.facebook.com/paul.mowat.3'><FontAwesomeIcon icon={faFacebook} className='social-icon' /></a></li>
              <li><a href='https://twitter.com/paul_mowat'><FontAwesomeIcon icon={faTwitter} className='social-icon' /></a></li>
              <li><a href='https://uk.linkedin.com/in/paulmowat'><FontAwesomeIcon icon={faLinkedin} className='social-icon' /></a></li>
              <li><a href='https://www.instagram.com/paulmowat/'><FontAwesomeIcon icon={faInstagram} className='social-icon' /></a></li>
              <li><a href='https://github.com/paulmowat'><FontAwesomeIcon icon={faGithub} className='social-icon' /></a></li>
            </ul>
            <ul className='copyright'>
              <li>&copy; Copyright 2005 - {new Date().getFullYear()} - Paul Mowat - All rights reserved.</li>
            </ul>
          </div>
          <div id='go-top'><a className='smoothscroll' title='Back to Top' href='#home'><FontAwesomeIcon icon={faChevronCircleUp} className='icon' /></a></div>
        </div>
      </footer>
    )
  }
}
