var path    = require('path');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'babel',
        query: {
          presets: ['react']
        }
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.png|woff|woff2|eot|ttf|svg$/, loader: 'url-loader'}
    ]
  }
};
