const {
  override,
  // fixBabelImports,
  addWebpackAlias,
  addBabelPlugins,
} = require("customize-cra");
const path = require("path");
const loaderUtils = require("loader-utils");

module.exports = override(
  /* ------ antd design ------ */
  // fixBabelImports("import", {
  //   libraryName: "antd",
  //   libraryDirectory: "es",
  //   style: "css",
  // }),
  // addWebpackAlias({
  //   "@ant-design/icons/lib/dist$": path.resolve(__dirname, "util/antd_icon.js"),
  // }),
  /* ------------------------ */
  ...addBabelPlugins([
    "babel-plugin-react-css-modules",
    {
      exclude: "node_modules",
      "filetypes": {
        ".scss": {
          "syntax": "postcss-scss"
        }
      },
      generateScopedName: function(name, filename) {
        const fileNameOrFolder = filename.match(
          /index\.module\.(css|scss|sass)$/
        )
          ? path.basename(path.dirname(filename))
          : path.basename(filename, ".css");
        const hash = loaderUtils.getHashDigest(
          path.posix.relative(process.cwd(), filename) + name,
          "md5",
          "base64",
          5
        );
        return fileNameOrFolder.replace(".module", "") + "_" + name + "__" + hash;
      },
    },
  ])
);
