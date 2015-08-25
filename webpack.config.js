var path = require("path");
var webpack = require('webpack');

module.exports = [{
  context: path.join(__dirname, "public", "javascripts"),
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3001', // WebpackDevServer host and port
    'webpack/hot/only-dev-server',
    'app' // Your appʼs entry point
  ],
  output: {
    path: path.join(__dirname, "public", "javascripts"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['react-hot', 'jsx?harmony']}
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ["", ".js", ".jsx"],
    root: [path.join(__dirname, "public", "javascripts")],
    modulesDirectories: ["node_modules"]
  }
}];