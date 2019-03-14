module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "homepage/" : "/",
  outputDir: process.env.NODE_ENV === "production" ? "dist/homepage" : "dist/",
  indexPath:
    process.env.NODE_ENV === "production" ? "../index.html" : "index.html"
};
