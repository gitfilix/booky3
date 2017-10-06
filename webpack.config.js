module.exports = {
  entry: ['./app/index.js'],
  output: {
    path: __dirname +'/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/, // a regular expression that catches .js files
        exclude: /node-modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    port: 3001,
    contentBase: './build',
    inline: true
  }
}
