import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'next/router'
import { Layout, MainContainer } from '../components/layout'
import { Home } from '../contents/home'
import { About } from '../contents/about'
import { Cv } from '../contents/cv'
import { Recommendations } from '../contents/recommendations'
import { Skills } from '../contents/skills'
import { Contact } from '../contents/contact'

function Start (props) {
  return (
    <Layout title='Home' url={props.router}>
      <MainContainer fluid>
        <Home />
        <About />
        <Cv />
        <Skills />
        <Recommendations />
        <Contact />
      </MainContainer>
    </Layout>
  )
}

Start.propTypes = {
  router: PropTypes.object
}

export default withRouter(Start)
