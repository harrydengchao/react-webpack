const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('../config')


// 页面列表
const htmlList = [
  {
    filename: 'index.html',
    template: 'html/index.html',
    title: 'react-webpack'
  },
]

module.exports = {
  dev: htmlList.map((item) => {
    return new HtmlWebpackPlugin({
      ...item,
      assetsPath: config.dev.assetsPublicPath,
      inject: true
    })
  }),
  prod: htmlList.map((item) => {
    return new HtmlWebpackPlugin({
      ...item,
      filename: config.build.assetsRoot + '/' + item.filename,
      assetsPath: config.dev.assetsPublicPath,
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency'
    })
  })
}
