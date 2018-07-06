
const VConsolePlugin = require('vconsole-webpack-plugin')

module.exports = (api, projectOptions) => {
  const {vconsoleOptions} = projectOptions.pluginOptions
  api.configureWebpack(webpackConfig => {
    webpackConfig.plugins.push(new VConsolePlugin(Object.assign({
      enable: true
    }, vconsoleOptions)))
  })
}
