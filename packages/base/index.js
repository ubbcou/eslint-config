module.exports = {
  extends: [
    'airbnb-base',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['prettier'],
  rules: {
    // import
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',

    // common
    semi: [2, 'never'],
    quotes: ['error', 'single'],
    camelcase: 'off',
    'no-trailing-spaces': 'error',
    'eol-last': ["error", "always"],
    'comma-dangle': ['error', 'always-multiline'],
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    "no-use-before-define": ["error", { "functions": false, "classes": true }]
  },
  globals: {
  },
};
