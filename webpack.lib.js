const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const commonConfig = require("./webpack.common");

module.exports = {
  ...commonConfig,
  entry: "./src/UIComponents/index.js",
  mode: "production",
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "styled-components": "styled-components",
  },
  plugins: [new CopyPlugin([{ from: "./src/magicdust", to: "./styles/" }])],
};
