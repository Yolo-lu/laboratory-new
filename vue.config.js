module.exports = {
  lintOnSave: false,
  devServer: {
    // 配置端口号
    port: 8080,
    // 用来真机调试
    host: '0.0.0.0',
    // 代理方式处理跨域 (面试必问)
    proxy: {
      "/api": {
        ws: false,
        // target就是请求接口的根路径
<<<<<<< HEAD
        target: "https://www.shiyanlou.com/api",
=======
        target: " https://cnodejs.org/api/v1",
>>>>>>> origin/master
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}