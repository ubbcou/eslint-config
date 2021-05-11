# eslint config

## main content

- airbnb
- prettier
- import
- common

  ```any
    // no semi
    semi: [2, 'never']
    // just single quotes
    quotes: ['error', 'single']
    // comma
    'comma-dangle': ['error', 'always-multiline']
  ```

## usage

### install

```bash
yarn add -D eslint @ubbcou/eslint-config-base
```

### config

```js
// .eslintrc.js
module.exports = {
  extends: [
    '@ubbcou/base',
  ],
}
```

## attention

保存代码时自动修复eslint错误
```json
  // setting
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
```
