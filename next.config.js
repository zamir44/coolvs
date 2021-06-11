const withCSS = require('@zeit/next-css')
module.exports = withCSS()

const nextTranslate = require('next-translate')

module.exports = {
    ...nextTranslate(),
    target: 'serverless',
  }