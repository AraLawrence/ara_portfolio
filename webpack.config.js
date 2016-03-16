const webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/js/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    // publicPath: '/dest/'
    publicPath: "https://aqueous-bastion-25399.herokuapp.com/"
  },
  plugins: [
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass?indentedSyntax']
      },
      {
        test: /\.(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000'
      },
      {
        test: /\.(ttf|eot|otf)$/, loader: 'file'
      }
    ]
  }
};
