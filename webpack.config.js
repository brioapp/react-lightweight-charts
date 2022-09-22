var path = require('path')

module.exports = {
  mode: 'production',
  entry: './src/react-lightweight-charts.js',
  output: {
    path: path.resolve('dist'),
    filename: 'react-lightweight-charts.min.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    react: 'react',
  },
}
