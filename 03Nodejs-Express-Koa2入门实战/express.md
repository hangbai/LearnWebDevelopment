# express

## 安装

```shell
npm i express
```

## 基本使用

```javascript
const express = require('express')
const app = express()
// 显示数据
app.get('/home', (req, res) => {
  res.send('get page 123')
  console.log('get page')
})
// 增加数据
app.post('', (req, res) => {
  res.send('post')
  console.log('post')
})
// 修改数据
app.put('', (req, res) => {
  res.send('put')
  console.log('put')
})
// 删除数据
app.delete('', (req, res) => {
  res.send('delete')
  console.log('delete')
})
// 动态路由
app.get('/item/:id', (req, res) => {
  let id = req.params['id']
  res.send(`item id is ${id}`)
})
// get传值
app.get('/item', (req, res) => {
  let query = req.query
  res.send(`query is name:${query.name}`)
})
// 监听
app.listen(8080)
```

## ejs基本使用

```javascript
const express = require('express')
const ejs = require('ejs')
const app = express()
app.engine('html', ejs.__express) // 修改ejs 后缀
app.set('view engine', 'html') //加载引擎
app.use(express.static('static'))
app.get('/home', (req, res) => {
  let title = '你好'
  res.render('index', {title})
})
// 监听
app.listen(8080)
```