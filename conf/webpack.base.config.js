import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default new Config().merge({
  entry: './client/index.js',
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
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
    new HtmlWebpackPlugin({
      template: './client/index.html',
      inject: "body"
    })
  ]
});
