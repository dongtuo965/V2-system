module.exports = {
  devServer: {
    port: 8848,
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:8848', // 对应自己的接口
    //     changeOrigin: true,
    //     // ws: true,
    //     pathRewrite: {
    //       '^/api': '',
    //     },
    //   },
    // },
  },
  lintOnSave: false,
  publicPath: './',
}
