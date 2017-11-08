import express from 'express';
import path from 'path';

import webpack from 'webpack';
// Right now ES6 doesn't support conditional imports so webpack-dev-server
// has to be under dependencies instead of devDependencies.
import WebpackDevServer from 'webpack-dev-server';

import bodyParser from 'body-parser'; //  PARSE HTML BODY

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, './../public')));


/* support client-side routing */
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './../public/index.html'));
});


app.listen(port, () => {
    console.log('Express is listening on port', port);
});

// if development environment, turn on Dev Server
if (process.env.NODE_ENV == 'development') {
  const devPort = 4000;
  console.log('Server is running in development mode');
  const config = require('../webpack.dev.config');
  const compiler = webpack(config);
  const devServer = new WebpackDevServer(compiler, config.devServer);
  devServer.listen(
    devPort, () => {
      console.log('webpack-dev-server is listening on port', devPort);
    }
  );
}
