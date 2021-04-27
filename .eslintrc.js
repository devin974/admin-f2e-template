module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    OSS: true,
    ga: true,
    wx: true, // 微信分享
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  rules: {
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        vue: 'never'
      }
    ],
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
    'vue/no-v-html': 'off',
    'arrow-parens': [
      2,
      "as-needed",
      { "requireForBlockBody": true }
    ],
    'global-require': 0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
