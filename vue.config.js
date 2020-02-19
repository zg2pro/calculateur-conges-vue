module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/calculateur-conges-vue/'
      : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}
