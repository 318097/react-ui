const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const commonConfig = require("./webpack.common");

module.exports = {
  ...commonConfig,
  entry: "./src/UIComponents/index.js",
  mode: "production",
  devtool: "cheap-module-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    library: "reactUI",
  },
  plugins: [new CopyPlugin([{ from: "./src/magicdust", to: "./styles/" }])],
};
