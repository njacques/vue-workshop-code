module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        pathRewrite: {
          "^/api/": "/" // remove base path
        },
        ws: true,
        changeOrigin: true
      }
    }
  }
};
