var path = require('path');

module.exports = {
  //程序入口文件
  //需要增加一个脚本当发生改动的时候去自动刷新应用
  entry: path.resolve(__dirname, 'app/main.js'),
  //程序打包目录
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: "./build",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
};
