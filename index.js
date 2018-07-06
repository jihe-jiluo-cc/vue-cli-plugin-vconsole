
const VConsolePlugin = require('vconsole-webpack-plugin')

module.exports = (api, projectOptions = {}) => {
  api.chainWebpack(webpackConfig => {
    /* eslint-disable indent */
    webpackConfig
      .plugin('vconsole')
        .use(VConsolePlugin, Object.assign({
          enable: true
        }, projectOptions))
    /* eslint-enable indent */
  })
}
