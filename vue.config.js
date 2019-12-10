module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: 'https://stocktrader-fcc4e.firebaseio.com'
  }
}