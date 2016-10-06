var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var path = require('path')

module.exports = {
  entry: './public/javascripts/script.js',
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'jsx',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!postcss-loader"
      },
      {
        test: /\.(scss|sass)$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      },
      {
        test: /\.(svg|jpg|png)/,
        loaders: ['url-loader']
      }
    ]
  },
  debug: true,
  resolve: {
    root: path.join(__dirname, './public/images/')
  },
  postcss: function () {
    return [precss, autoprefixer];
  }
}
