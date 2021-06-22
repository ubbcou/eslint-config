# eslint config for vue

## 使用方法

### 安装

```bash
yarn add -D eslint @ubbcou/eslint-config-vue
```

### 配置

```js
// .eslintrc.js
module.exports = {
  extends: [
    '@ubbcou/vue',
  ],
}
```

## 注意

`vscode` 保存代码时自动修复eslint错误

```json
  // setting
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
```
