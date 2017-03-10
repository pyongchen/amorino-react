let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');

let publicPath = path.join(__dirname, 'build', 'public');

// 客户端webpack配置
module.exports = {
  name: 'client',
  devtool:"cheap-module-eval-source-map",

  // 入口文件
  entry: {
    pages: path.join(__dirname, 'src/app/router.jsx'),
    vendors: ['react','react-dom','react-router']       //抽取公共框架
  },

  output: {
    path: publicPath,
    filename: 'js/bundle.js'
  },

  module: {
    rules: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
      { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.(png|jpg|gif)$/, loader: 'url-loader?&name=/img/[name].[ext]' },
      { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Amorino',
      template: path.join(__dirname, 'src/app/index.html') , // 模板文件，单页面应用，只需一个
      filename: path.join(__dirname, 'build/index.html')   // 目的文件
    }),
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'js/vendors.js' }),
    new ExtractTextPlugin("css/bundle.css"),
    new webpack.ProvidePlugin({ $: "jquery" }),
    new webpack.HotModuleReplacementPlugin(),
    // new OpenBrowserPlugin({url: 'http://127.0.0.1:8888'})
  ]
};

