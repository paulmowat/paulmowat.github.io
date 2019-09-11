import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

export class HeadLayout extends React.Component {
  render() {
    console.log(this.props)
    return (
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="/static/js/particles/particles.min.js"></script>  
        <script src="/static/js/app.js"></script>
        <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
        {/* <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://maxcdn.icons8.com/fonts/line-awesome/1.1/css/line-awesome-font-awesome.min.css"></link> */}
        <title>Paul Mowat - {this.props.title}</title>

        {this.props.children}

      </Head>
    )
  }
}

HeadLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node
}
