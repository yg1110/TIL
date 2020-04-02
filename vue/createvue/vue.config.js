module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/openapi/": {
        target: "http://211.237.50.150:7080/openapi/",
        changeOrigin: true,
        pathRewrite: {
          "^/openapi": ""
        }
      }
    }
  }
};
