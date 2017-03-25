var path = require('path');

module.exports = {
  entry: './src/todoListApp.js',
  output: {
    path: path.join(__dirname, '/compiled/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {presets: ['es2015', 'react']}
      }
    ]
  }

};