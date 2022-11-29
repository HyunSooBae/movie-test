// import path from 'path' 와 같은 내용 ↓
// import HtmlWebpackPlugin from 'html-webpack-plugin'
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './main.js', // 진입점
  output: { // 결과 출력
    // path: path.resolve(__dirname, 'dist'), // 사실 없어도 되는..
    // filename: 'main.js', // 기본값..
    clean: true
  },
  module: { // Loader
    rules: [
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 제외 옵션!
        use: 'babel-loader',
      }
    ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {from: 'static'} // static 폴더에서 카피해서 붙여넣기,,
      ]
    })
  ],
  // devServer: {
  //   port: 1234
  // }
}