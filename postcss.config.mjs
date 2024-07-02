/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // https://github.com/postcss/postcss-import
    'postcss-import': {},
    // https://tailwindcss.com/docs/using-with-preprocessors#nesting
    // https://drafts.csswg.org/css-nesting-1/
    // https://github.com/postcss/postcss-nested
    // 默认支持 postcss-nested 嵌套规则，类似 sass 语法
    'tailwindcss/nesting': {},
    tailwindcss: {},
    // 自动管理浏览器前缀
    autoprefixer: {},
    // 生产环境优化，使用 cssnano 等工具缩小 CSS，(并使用 Brotli 压缩 CSS)
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};

export default config;