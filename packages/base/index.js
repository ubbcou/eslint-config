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
    semi: [2, 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline']
  },
  globals: {
    wx: 'readonly',
    Page: 'readonly',
    App: 'readonly'
  },
};
