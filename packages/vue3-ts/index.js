module.exports = {
  parser: 'vue-eslint-parser',
  extends: [
    '@ubbcou/base',
    '@ubbcou/typescript',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['vue'],
  rules: {
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 4,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
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
