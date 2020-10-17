module.exports = {
  devServer: {
    port: 3000
  },

  /** css loader to import const and vars */
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/app/scss/index.scss";'
      }
    }
  }
}
