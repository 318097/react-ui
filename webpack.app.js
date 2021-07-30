const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");

module.exports = {
  ...commonConfig,
  entry: "./src/index.js",
  mode: "development",
  devtool: "eval-cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "script.js",
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    port: 8000,
    clientLogLevel: "silent",
    open: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};
