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
    node: true,
  },
  plugins: ['prettier'],
  rules: {
    // import
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',

    // common
    semi: [2, 'never'],
    quotes: ['error', 'single'],
    camelcase: 'off',
    'eol-last': ["error", "always"],
    'comma-dangle': ['error', 'always-multiline'],
    'no-underscore-dangle': 'off',
    
  },
  globals: {
    wx: 'readonly',
    Page: 'readonly',
    App: 'readonly'
  },
};
