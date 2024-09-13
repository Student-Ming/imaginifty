const isBrowser = typeof window !== 'undefined'

/**
 * @type {import('next-i18next').UserConfig}
 */

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['zh', 'en'],
        // 禁用浏览器自动语言检测功能
        localeDetection: false,
    },
    fallbackLng: {
        default: ['en'],
        'zh-TW': ['zh'],
        'zh-CN': ['zh'],
        'zh-HK': ['zh'],
    },
    localePath:
        typeof window === 'undefined'
            ? require('path').resolve('./public/locales')
            : '/locales',

    // 开发环境更改并保存后自动更新语言
    reloadOnPrerender: process.env.NODE_ENV === 'development',
    serializeConfig: false,
    partialBundledLanguages: isBrowser && true,
}