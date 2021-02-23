# koa中文教程

https://www.itying.com/koa/

```shell
npm install koa --save
```

## 创建

```javascript
const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000)
```

```javascript
const cors = require('koa2-cors') // 跨域
app.use(cors())

router.prefix('/api/mall') // 前缀
```

## 路由

https://github.com/koajs/router/blob/HEAD/API.md

```javascript
router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  })
  .post('/users', (ctx, next) => {
    // ...
  })
  .put('/users/:id', (ctx, next) => {
    // ...
  })
  .del('/users/:id', (ctx, next) => {
    // ...
  })
  .all('/users/:id', (ctx, next) => {
    // ...
  });
```

```javascript
const Koa = require('koa')
const app = new Koa()

const Router = require('@koa/router') //注意：引入的方式
const router = new Router()
router.get('/', function (ctx, next) {
  ctx.body = "首页";
})

router.get('/news', (ctx, next) => {
  ctx.body = "新闻页"
})

router.get('/data/:aid/:bid', (ctx, next) => {
  ctx.body = ctx.params //{"aid":"123","bid":"456"}
});

app.use(router.routes()) //作用：启动路由
app.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('starting at http://localhost:3000/');
})
```

### 上下文

```json
{
  "ctx.url": "/data?name=zhang&age=18",
  "ctx.query": {
    "name": "zhang",
    "age": "18"
  },
  "ctx.querystring": "name=zhang&age=18",
  "origin": "http://localhost:3000",
  "href": "http://localhost:3000/data?name=zhang&age=18",
  "path": "/data",
  "host": "localhost:3000",
  "hostname": "localhost",
  "fresh": false
}
```

### 中间件

Koa 选择了洋葱圈模型

#### 应用级中间件

```javascript
app.use(async (ctx, next) => {
  console.log(new Date(), '开始')
  await next()
  console.log('返回')
})
```

#### 路由中间件

```javascript
router.get('/', async (ctx, next) => {
  next()
})
```

#### 错误处理中间件

```javascript
app.use(async (ctx, next) => {
  next();
  if (ctx.status == 404) {
    ctx.body = "这是一个404页面"
  }
})
```

#### 第三方中间件

##### koa-bodyparser

```javascript
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
router.post('/doAdd', (ctx, next) => {
  ctx.body = ctx.request.body
});
```

##### koa-static

```javascript
const static = require('koa-static');
app.use(static('static'))
app.use(static('./static'))
app.use(static(__dirname + '/static'))
```

## Cookie

Koa中设置Cookie的值

```javascript
ctx.cookies.set(name, value, [options])
```

Koa中获取Cookie的值

```javascript
ctx.cookies.get(name);
```

options 名称 options 值

```text
maxAge              一个数字表示从 Date.now() 得到的毫秒数
expires cookie      过期的 Date
path cookie         路径, 默认是'/add'
domain cookie       域名 xxx.baidu.com
secure             安全 cookie   默认false，设置成true表示只有 https可以访问
httpOnly           是否只是服务器可访问 cookie, 默认是 true
overwrite          一个布尔值，表示是否覆盖以前设置的同名的 cookie (默认是 false). 如果是 true, 在同一个请求中设置相同名称的所有 Cookie（不管路径或域）是否在设置此Cookie 时从 Set-Cookie 标头中过滤掉。
```

Koa中设置中文Cookie

```javascript
console.log(Buffer.from('5L2g5aW9', 'base64').toString());// 还原base64字符串
console.log(Buffer.from('你好').toString('base64'));// 转换成base64字符串```
```

## Session

安装 koa-session

```shell
npm install koa-session --save
```

```javascript
const session = require('koa-session');
app.keys = ['some secret hurr'];
const CONFIG = {
  key: 'koa:sess',   //cookie key (default is koa:sess)
  maxAge: 10000,  // cookie的过期时间 maxAge in ms (default is 1 days)
  overwrite: true,  //是否可以overwrite    (默认default true)
  httpOnly: false, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
  signed: false,   //签名默认true
  rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
  renew: false,  //(boolean) renew session when session is nearly expired,
};
app.use(session(CONFIG, app));
```

使用

```javascript
ctx.session.username = "张三"; // 设置值 
ctx.session.username // 获取值 
```

## 插件

### ejs模板

路径 views/index.ejs

```javascript
const views = require('koa-views');
app.use(views('views', {map: {html: 'ejs'}})); // index.html
app.use(views('views', {extension: 'ejs'})) // index.ejs
router.get('/add', async (ctx) => {
  let title = 'hello koa2'
  let list = ['123', '456', '789']
  let age = 25
  await ctx.render('index', {title, list, age})
})
```

```ejs
<p><%= title %></p>
<p><%= list %></p>
<br>
<ul>
    <% for(let i = 0;i < list.length;i++) { %>
        <li><%= list[i] %></li>
    <% } %>
    <% for(let i of list) { %>
        <li><%= i %></li>
    <% } %>
</ul>
<br>
<% if(age > 18){ %>
    大于18岁
<% }else{ %>
    小于18岁
<% } %>
<%- include('footer.html') %>
```

### art-template 模板

https://aui.github.io/art-template/zh-cn/docs/

安装

```shell
npm install --save art-template
npm install --save koa-art-template
```

```javascript
const render = require('koa-art-template')
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
})
```

#### 语法

```html
输出
{{value}}
{{data.key}}
{{data['key']}}
{{a ? b : c}}
{{a || b}}
{{a + b}}
原文输出
{{@ value }}
条件
{{if value}} ... {{/if}}
{{if v1}} ... {{else if v2}} ... {{/if}}
循环
{{each target}}
{{$index}} {{$value}}
{{/each}}
变量
{{set temp = data.sub.content}}
模板继承
{{extend './template.html'}}
{{block 'name'}} ... {{/block}}
子模板
{{include './header.html'}}
{{include './header.html' data}}
过滤器
注册
template.defaults.imports.dateFormat = function(date, format){/*[code..]*/};
template.defaults.imports.timestamp = function(value){return value * 1000};
{{date | timestamp | dateFormat 'yyyy-MM-dd hh:mm:ss'}}

```

### MongoDB

```shell
npm install mongodb --save
```

```javascript
let MongoClient = require('mongodb').MongoClient
let dbUrl = 'mongodb://localhost:27017'
let dbName: 'MallData'

class Db {
  static getInstance() {
    if (!Db.instance) {
      Db.instance = new Db()
    }
    return Db.instance
  }

  constructor() {
    this.dbClient = ''
    this.connect()
  }

  connect() {
    let _that = this
    return new Promise((resolve, reject) => {
      if (!_that.dbClient) {
        MongoClient.connect(Config.dbUrl, (err, client) => {
          if (err) {
            reject(err)
          } else {
            _that.dbClient = client.db(Config.dbName)
            resolve(_that.dbClient)
          }
        })
      } else {
        resolve(_that.dbClient)
      }
    })
  }

  find(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        let result = db.collection(collectionName).find(json)
        result.toArray(function (err, docs) {
          if (err) {
            reject(err)
          } else {
            resolve(docs)
          }
        })
      })
    })
  }

  insert(collectionName, json) {
    return new Promise((resolve, reject) => {
      this.connect().then((db) => {
        db.collection(collectionName).insertOne(json, (err, docs) => {
          if (err) {
            reject(err)
          } else {
            resolve(docs)
          }
        })
      })
    })
  }
}

module.exports = Db.getInstance()
```

### Mongoose

```shell
npm install mongoose --save
```

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MallData', {useNewUrlParser: true, useUnifiedTopology: true});
const testSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String},
  }, {versionKey: false} // 去除"__v":0
)
const TestModel = mongoose.model('Test', testSchema, 'test');
TestModel.findOne({}, (err, docs) => {
  console.log(docs)
})
```