var path = require('path');

var config = {
  entry: {
    admin: './admin/index.js',
    consumer: './consumer/index.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    noParse: [/jquery/],
    loaders: [{
      test: /\/images\//,
      loader: 'file'
    }, {
      test: /\/icons\//,
      loader: 'url'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }
};

module.exports = config;