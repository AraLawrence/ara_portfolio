const webpack = require('webpack');

const envPaths = {
  prod: 'http://www.aralawrence.com/',
  stage: 'http://localhost:3000/',
  dev: '/dist/',
};

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/js/index.jsx',
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: envPaths[process.env.BUILD_ENV],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.(jsx|js)$/,
        loaders: ['babel'],
        include: __dirname,
        exclude: /node_modules/,
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass?indentedSyntax'],
      },
      {
        test: /\.(woff2?|svg|jpe?g|png|gif|ico)$/, loader: 'url?limit=10000',
      },
      {
        test: /\.(ttf|eot|otf)$/, loader: 'file',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
