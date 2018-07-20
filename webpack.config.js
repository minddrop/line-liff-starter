// outputにabsolute pathいれるときにpath読み込むために必要となるmodule
const path = require('path');
module.exports = {
  mode: 'development', devtool: 'source-map',// watchしたいからdevelopment
  entry: {
    "line-liff-chat": [
      path.resolve(__dirname, "src/liff-starter.js")
    ],
  },
  output: {
    filename: '[name].js', // bundleした後のファイル名
    path: path.join(__dirname, 'public/') // path生成
  }
}
