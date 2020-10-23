module.exports = {
  devServer: {
    port: 8080
  },

  /** css loader to import const and vars */
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/app/sass/index.scss";'
      }
    }
  }
}
