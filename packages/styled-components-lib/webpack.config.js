const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const plugins = [
  new CleanWebpackPlugin(),
]

module.exports = {
  devtool: 'hidden-source-map',
  entry: './src/index.js',
  mode: 'production',
  externals: {
    styledComponents: 'styled-components'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
    library: 'testlib',
  },
  plugins,
}
