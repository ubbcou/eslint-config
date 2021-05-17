module.exports = {
  parser: 'vue-eslint-parser',
  // parserOptions: {
  //   parser: 'babel-eslint',
  //   ecmaVersion: 2020,
  //   sourceType: 'module'
  // },
  extends: [
    'plugin:vue/recommended',
  ],
  plugins: ['vue'],
  rules: {
    // @TODO 这里的规则不知道为啥无效
    'vue/max-attributes-per-line': 1,
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'any',
          normal: 'any',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
};
