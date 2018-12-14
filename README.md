# react-webpack-cli

---

一款基于 `react`、`webpack` 的项目脚手架，定位于移动端

---

## 特性

- router 使用 [@reach/router](https://reach.tech/router)
- store 使用 [@rematch/core](https://rematch.gitbooks.io/rematch/#getting-started)
- 同时兼容 `局部样式(css modules)` 与 `全局样式`
- 未考虑兼容IE9以下

---

## 组件模块，局部样式引入方式(暂时只支持`scss`)

- 命名方式为 `[stylename].module.scss`
- 组件中引入方式为 `import styles from './home.module.scss'`

home.module.scss
```scss
.index {
  font-size: 18px;
  color: #ff00ff;
}
```
  
```react
import styles from './home.module.scss'

<div className={cls(styles['index'])}></div>
```

---

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
