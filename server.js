import express from 'express';
import path from 'path';

const PORT = 2400;
const PUBLIC_PATH = __dirname + '/public';
const app = express();

const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.babel').default;
  const compiler = webpack(webpackConfig);
  const devMiddleWare = require('webpack-dev-middleware')(compiler, {
    hot: true,
    publicPath: '/',
    stats: {
      colors: true
    }
  });
  app.use(require('webpack-hot-middleware')(compiler));
  app.use('/', devMiddleWare);
  app.use('*', devMiddleWare);
} else {
  app.use(express.static(PUBLIC_PATH));
}

// app.all("*", function(req, res) {
//   console.log('yo');
//   res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
// });

app.listen(PORT, function() {
  console.log('🌎 Listening on port ' + PORT + '...');
});
