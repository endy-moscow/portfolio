import webpack from 'webpack';
import Config from 'webpack-config';

const path = require('path');

export default new Config().extend('conf/webpack.base.config.js').merge({
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    __dirname + '/../client/index.js'
  ],
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
       loaders: [
         {
           test: /\.(scss|css)$/,
           use: [
             "style-loader",
             "css-loader",
             "sass-loader"
           ]
         },
         {
           test: /\.(gif|png|jpe?g|svg)$/i,
           use: [
             'url-loader',
             'img-loader'
           ]
         }
       ]
     },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
