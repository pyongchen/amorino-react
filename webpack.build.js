let webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: {
    pages: __dirname + '/src/app/router.jsx',
    vendors: ['react','react-dom','react-router']  //抽取公共框架
  },
  output: {
    path: __dirname + '/build',
    publicPath: './build',
    filename: 'js/bundle.js'
  },
  module: {
    rules: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }) },
      { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader' },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.(png|jpg|gif)$/, loader: 'url?limit=8192&name=/img/[name].[ext]' },
      { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url-loader' }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'js/vendors.js' }),
    new ExtractTextPlugin("css/bundle.css"),
    new webpack.ProvidePlugin({ $: "jquery" }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({ url: 'http://localhost:8888/' })
  ]
};
