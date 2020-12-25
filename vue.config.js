const path = require('path')
const webpack = require('webpack')
const createThemeColorReplacerPlugin = require('./src/config/ThemeColorReplacer')

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    // webpack plugins
    plugins: [
      // Ignore all locale files of moment.js
      createThemeColorReplacerPlugin(),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    proxy: {
      '/apiPath': {
        target: 'http://10.10.30.211:88/wms-server',
        changeOrigin: true,
        pathRewrite: {
          '^/apiPath': '/'
        }
      }
    }
  }
}
