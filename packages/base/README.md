# eslint config for javascript

## 使用方法

### 安装

```bash
yarn add -D eslint @ubbcou/eslint-config-base
```

### 配置

```js
// .eslintrc.js
module.exports = {
  extends: [
    '@ubbcou/base',
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
