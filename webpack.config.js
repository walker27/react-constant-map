const path = require('path');



module.exports = {
  devtool: 'source-map',
  entry: './src/index.tsx',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },

  externals: /^(react|promise)/,

  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './lib'),
    libraryTarget: 'commonjs2',
  },
}