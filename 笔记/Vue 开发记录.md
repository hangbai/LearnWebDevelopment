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
npm install --save-dev less@^2.7.3
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

### Vant
```shell
npm i vant@next -S
```
```javascript
import Vant from 'vant';
import 'vant/lib/index.css';
app.use(Vant);
```

## 搭建

### 登录页面

在 setup 中访问路由和当前路由
https://next.router.vuejs.org/zh/guide/advanced/composition-api.html

### koa
```shell
npm install -g koa-generator
koa2 -e blog
```

```javascript
// API/blog/model/config.js
module.exports ={
    dbs: 'mongodb://127.0.0.1:27017/blog'
}
// API/blog/model/user.js
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    user: {type: String},
    password: {type: String},
  }, {versionKey: false} // 去除"__v":0
)
module.exports = mongoose.model('User',userSchema,'user')
// API/blog/routes/users.js
const router = require('koa-router')()
const userModel = require('../model/user')
router.prefix('/users')
router.post('/', async (ctx, next) => {
  let user = await userModel.findOne(ctx.request.body,{_id: 0})
  if (user) {
    ctx.body = {'success': true}
  } else {
    ctx.body = {'success': false}
  }
})
module.exports = router
```

