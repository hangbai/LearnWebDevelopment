const express = require('express')
const ejs = require('ejs')
const app = express()
app.engine('html',ejs.__express) // 修改ejs 后缀
app.set('view engine','html') //加载引擎
app.use(express.static('static'))
app.get('/home',(req,res)=>{
  let title = '你好'
  res.render('index',{title})
})
// 监听
app.listen(8080)