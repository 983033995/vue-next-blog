let path = require("path");
let env = process.env.npm_lifecycle_event;
console.log("env", env);
module.exports = {
  publicPath: "./",
  chainWebpack: (config) => {
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach((type) => {
      addStyleResource(config.module.rule("less").oneOf(type));
    });
  },
  css: {
    loaderOptions: {
      stylus: {
        "resolve url": true
        // 使用stylus文件
        //   import: ['./src/assets/styles/xxx.styl']
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  pluginOptions: {
    //   "cube-ui": {
    //       postCompile: true,
    //       theme: true
    //   }
  },
  devServer: {
    proxy: ""
  }
};

// 添加全局公共样式
function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "src/assets/styles/global.less")]
    });
}
