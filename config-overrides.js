const { override, addWebpackAlias, fixBabelImports } = require("customize-cra");
const path = require("path");

module.exports = override(
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
);
