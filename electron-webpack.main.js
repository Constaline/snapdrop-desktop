// remove sourcemap
// https://github.com/electron-userland/electron-webpack/issues/285#issuecomment-687599892
module.exports = function (config) {
  config.devtool = false;
  // BannerPlugin is used to generate require("source-map-support/source-map-support.js").install() codes ,so we can just remove this plugin
  config.plugins = config.plugins.filter(plugin => plugin.constructor.name !== 'BannerPlugin');
  return config
}