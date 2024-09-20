const { i18n } = require('./next-i18next.config.js')

module.exports = {
  i18n,
  reactStrictMode: false,
  transpilePackages: [
    "antd",
    "@ant-design",
    "rc-util",
    "rc-pagination",
    "rc-picker",
    "rc-notification",
    "rc-tooltip",
    "rc-tree",
    "rc-table"
  ],
  // output: 'export',
  // 添加basePath，确保在GitHub Pages上部署的项目能正确进行路由跳转
  // basePath: process.env.NODE_ENV === 'production' ? '/imaginifty' : '',
  // 添加assetPrefix，确保打包后的文件中前缀是指定的
  // assetPrefix: process.env.NODE_ENV === 'production' ? 'https://student-ming.github.io/imaginifty/' : '',
  // 文件名后缀自动包含“/”
  // exportTrailingSlash: true,
};

