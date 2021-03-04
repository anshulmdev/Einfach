/*
 * Vue CLI - Configuration
 */

module.exports = {
  // Webpack configuration
  chainWebpack: config => {
    // Preserve white spacing in production build
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.whitespace = 'preserve'
        return options
      })

    // Get version from package.json and make it available to our app
    config.plugin('define').tap(args => {
      args[0]['process.env']['PACKAGE_VERSION'] = JSON.stringify(require('./package.json').version) || 0
      return args
    })

    // Remove prefetch plugin to stop downloading all assets on first page load
    config.plugins.delete('prefetch')
  },
  // Vue CLI configuration
  productionSourceMap: false
}
