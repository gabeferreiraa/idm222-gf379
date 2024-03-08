const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./index.js", // Adjusted to the project root
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Adjusted to the project root
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./contact.html", // Adjusted to the project root
      filename: "contact.html",
    }),
    new HtmlWebpackPlugin({
      template: "./work.html", // Adjusted to the project root
      filename: "work.html",
    }),
  ],
  // Include additional configurations like loaders here if needed
};
