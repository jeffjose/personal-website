const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

const webpack = require("webpack");

module.exports = {
  //publicPath: process.env.NODE_ENV === "production" ? "homepage/" : "/",
  publicPath: "/",
  //outputDir: process.env.NODE_ENV === "production" ? "dist/homepage" : "dist/",
  outputDir: "dist/homepage",
  assetsDir: "static",
  //indexPath:
  //  process.env.NODE_ENV === "production" ? "../index.html" : "index.html"
  indexPath: "index.html",
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all"
      }
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      new webpack.ContextReplacementPlugin(
        /highlight\.js\/lib\/languages$/,
        new RegExp(`^./(${["javascript", "python", "bash"].join("|")})$`)
      )
    ]
  }
};
