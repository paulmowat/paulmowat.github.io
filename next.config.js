const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const webpack = require('webpack')

module.exports = withCSS(withSass({
  sassLoaderOptions: {
    sourceMap: true
  },
  webpack (config) {
    return config;
  }
}))
