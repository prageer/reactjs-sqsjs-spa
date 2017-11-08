'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require('webpack-dev-server');

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  PARSE HTML BODY

// Right now ES6 doesn't support conditional imports so webpack-dev-server
// has to be under dependencies instead of devDependencies.
var app = (0, _express2.default)();
var port = process.env.PORT || 5000;

app.use(_bodyParser2.default.json());

app.use('/', _express2.default.static(_path2.default.join(__dirname, './../public')));

/* support client-side routing */
app.get('*', function (req, res) {
  res.sendFile(_path2.default.resolve(__dirname, './../public/index.html'));
});

app.listen(port, function () {
  console.log('Express is listening on port', port);
});

// if development environment, turn on Dev Server
if (process.env.NODE_ENV == 'development') {
  var devPort = 4000;
  console.log('Server is running in development mode');
  var config = require('../webpack.dev.config');
  var compiler = (0, _webpack2.default)(config);
  var devServer = new _webpackDevServer2.default(compiler, config.devServer);
  devServer.listen(devPort, function () {
    console.log('webpack-dev-server is listening on port', devPort);
  });
}