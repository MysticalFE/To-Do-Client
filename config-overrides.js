const {
  override,
  addWebpackAlias,
  fixBabelImports,
  addWebpackPlugin,
  overrideDevServer,
} = require("customize-cra");
const path = require("path");
// const fs = require("fs");
const { DefinePlugin } = require("webpack");
const repoInfo = require("./git-repo-info")();

const packageJson = require(path.join(__dirname, "package.json"));
// let packageJson = {};
// fs.readFile(path.join(__dirname, "package.json"), "utf8", (err, data) => {
//   if (err) throw err;
//   packageJson = JSON.parse(data);
// });

const devServerConfig = () => (config) => {
  return {
    ...config,
    proxy: {
      "/api/todo": {
        target: "https://jiaxiangkai.cn/api",
        changeOrigin: true,
        logLevel: "debug",
        secure: false,
        pathRewrite: {
          "^/api/todo": "/todo",
        },
        onProxyRes(proxyRes) {
          proxyRes.headers["Cache-Control"] =
            "no-cache, no-store, must-revalidate";
        },
      },
    },
  };
};

module.exports = {
  webpack: override(
    addWebpackPlugin(
      new DefinePlugin({
        __SERVICE_NAME__: JSON.stringify(packageJson.serviceName || null),
        __PROJECT_NAME__: JSON.stringify(packageJson.name),
        __PROJECT_DISPLAY_NAME__: JSON.stringify(packageJson.displayName),
        __PROJECT_COMMIT_SHA__: JSON.stringify(repoInfo.sha),
        __PROJECT_VERSION__: JSON.stringify(repoInfo.lastTag),
        __PROJECT_AUTHOR__: JSON.stringify(repoInfo.author),
        __PROJECT_COMMITS_SINCE_RELEASE__: JSON.stringify(
          repoInfo.commitsSinceLastTag
        ),
        __PROJECT_ENVIRONMENT__: JSON.stringify(
          process.env.NODE_ENV === "production" ? "prod" : "dev"
        ),
        __PROJECT_COMPILE_TIME__: JSON.stringify(Date.now()),
      })
    ),
    // 配置路径别名
    addWebpackAlias({
      "@": path.resolve(__dirname, "src/"),
    }),
    // antd 按需加载
    fixBabelImports("import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true,
    })
  ),
  devServer: overrideDevServer(devServerConfig()),
};
