// process.env.VUE_APP_VERSION = require('./package.json').version;

// process.env.VUE_APP_NODE_VERSION = process.version;

// 一般情况下本地开发，局域网IP即可
const devServer = {
  // proxy: {
  //   '/statement-api/v2': {
  //     target: 'http://127.0.0.1:10037/api/v2',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/statement-api/v2': '',
  //     },
  //   },
  // },
  port: 9001,
  disableHostCheck: true,
};

module.exports = {
  productionSourceMap: false,

  devServer,
  css: {
    loaderOptions: {
      // 全局预加载 color 相关 scss变量
      sass: {
        prependData: '@import \'~@/assets/css/color\';',
      },
    },
  },
  chainWebpack: (config) => {
    // 覆写 whitespace 选项，避免 ElFormItem label 填写空字符串会被过滤
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        // eslint-disable-next-line no-param-reassign
        options.compilerOptions.whitespace = 'preserve';
        return options;
      })
      .end()
      .rule('i18n')
      .resourceQuery(/blockType=i18n/)
      .type('javascript/auto')
      .use('i18n')
      .loader('@kazupon/vue-i18n-loader')
      .end();
  },

  pluginOptions: {
    i18n: {
      // locale: 'zh_CN',
      // fallbackLocale: 'zh_CN',
      // localeDir: 'locales',
      enableInSFC: true,
    },
  },
};
