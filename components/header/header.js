import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

export class HeadLayout extends React.Component {
  render () {
    console.log(this.props)
    return (
      <Head>
        <title>Paul Mowat - {this.props.title}</title>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Paul Mowat is an developer based in Boddam/Aberdeen Scotland who currently works for Advanced Computer Software as a Principal Software Developer.' />
        <meta name='keywords' content='Paul Mowat, Aberdeen Developer, Boddam Developer, Aberdeen, Boddam, Developer, Software, Software Developer, Software Engineer, Programmer' />
        <meta name='author' content='Paul Mowat' />
        <script src='/static/js/particles/particles.min.js' />
        <script src='/static/js/app.js' />
        <link rel='shortcut icon' href='/static/favicons/favicon.ico' />
        {this.props.children}
      </Head>
    )
  }
}

HeadLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}
