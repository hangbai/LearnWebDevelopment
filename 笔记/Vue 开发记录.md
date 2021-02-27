# Vue 开发记录

## 项目建立

### 1.创建一个项目

使用Vue CLI 3

```bash
vue create hello-world
```

图形化界面创建和管理项目

```bash
vue ui
```

使用Vue CLI 2

```bash
npm install -g @vue/cli-init
```

### 3.安装Vue Router

```sh
vue add router
```

## UI

### 2.安装使用Vuetify

```bash
vue add vuetify
```

### antd
2.0
```shell
npm i --save ant-design-vue@next
npm install babel-plugin-import --save-dev //局部组件
```
完整引入
```javascript
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css';
const app = createApp(App);
app.use(Antd);
// ------------
import { Button } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
const app = createApp(App);
app.use(Antd);
```
按需加载
```javascript
// .babelrc or babel-loader option
{
  "plugins": [
    ["import", { "libraryName": "ant-design-vue", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
  ]
}

// babel-plugin-import 会帮助你加载 JS 和 CSS
import { DatePicker } from "ant-design-vue";

import DatePicker from "ant-design-vue/lib/date-picker"; // 加载 JS
import "ant-design-vue/lib/date-picker/style/css"; // 加载 CSS
// import 'ant-design-vue/lib/date-picker/style';         // 加载 LESS

app.use(DatePicker);
```
引入less
```shell
npm install --save-dev less
npm install -D less-loader@7.x
```

```javascript
import 'ant-design-vue/dist/antd.less';

// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
}
```