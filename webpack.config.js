var path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './app.js',
  output: {
    path: path.join(__dirname, 'www'),
    filanme: 'iterators',
    chunkFilename: '[name].chunk.js'
  },
  module:{
    loaders: [
      {
        test: '/\.js$/',
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'www')
  }
};
