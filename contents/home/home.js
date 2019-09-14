import React from 'react'
import { MainInner } from '../../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { Textfit } from 'react-textfit'

class Home extends React.Component {
  render () {
    return (
      <MainInner id='home' fluid full>
        <div id='header-container'>
          <div id='particles-js' />
          <div className='banner'>
            <div className='banner-text'>
              {/* <h1 className="responsive-headline">Paul Mowat.</h1> */}
              <Textfit mode='single' min={36} max={100} className='header'>
                Paul Mowat.
              </Textfit>
              <h3>I'm a <span>software architect</span> based in <span>Boddam/Aberdeen</span> Scotland <br /> with experience in <span>Application</span>, <span>Web</span> and <span>Mobile</span> development.</h3>
              <hr />
              <ul className='social'>

                <li>
                  <a href='https://www.facebook.com/paul.mowat.3'><FontAwesomeIcon icon={faFacebook} className='social-icon' /></a>
                </li>
                <li><a href='https://twitter.com/paul_mowat'><FontAwesomeIcon icon={faTwitter} className='social-icon' /></a></li>
                <li><a href='https://uk.linkedin.com/in/paulmowat'><FontAwesomeIcon icon={faLinkedin} className='social-icon' /></a></li>
                <li><a href='https://www.instagram.com/paulmowat/'><FontAwesomeIcon icon={faInstagram} className='social-icon' /></a></li>
                <li><a href='https://github.com/paulmowat'><FontAwesomeIcon icon={faGithub} className='social-icon' /></a></li>
              </ul>
            </div>
          </div>
          <p className='scrolldown'>
            <a className='smoothscroll' href='#about'><FontAwesomeIcon icon={faChevronCircleDown} className='smoothscroll-icon' /></a>
          </p>
        </div>
      </MainInner>
    )
  }
}

export { Home }
