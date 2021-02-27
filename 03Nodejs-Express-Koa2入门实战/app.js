const Koa = require('koa')
const app = new Koa()
const path = require('path')

const Router = require('@koa/router') //注意：引入的方式
const router = new Router()

// koa-art-template 渲染
const render = require('koa-art-template')
render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production'
})

// koa-static
const koaStatic = require('koa-static');
app.use(koaStatic('static'))

// koa-bodyparser
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

// koa-session
const session = require('koa-session');
app.keys = ['some secret'];
const CONFIG = {
  key: 'koa:sess',   //cookie key (default is koa:sess)
  maxAge: 24*3600*1000,  // cookie的过期时间 maxAge in ms (default is 1 days)
};
app.use(session(CONFIG, app));

router.get('/',async (ctx)=> {
  console.log(ctx.session.username)
  if (ctx.session.username == 'muyou3040' && ctx.session.password == '123456'){
    console.log('首页')
    ctx.body = "首页"
  }else {
    console.log('请登录')
    ctx.redirect('/login')
  }
})

router.get('/login', async (ctx) => {
  ctx.render('index')
})

router.post('/doLogin', async (ctx, next) => {
  let username = ctx.request.body.username
  let password = ctx.request.body.password
  console.log(username, password)
  if (username == 'muyou3040' && password == '123456') {
    console.log('登录成功')
    ctx.session.username = username
    ctx.session.password = password
    ctx.redirect('/')
  } else {
    console.log('登录失败')
    ctx.redirect('/login')
  }
})

app.use(router.routes()) //作用：启动路由
app.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('starting at http://localhost:3000/');
});


// router.get('/news', (ctx, next) => {
//   console.log('新闻页')
//   ctx.body = "新闻页"
// })

// router.get('/data/:aid/:bid', (ctx, next) => {
//   ctx.body = ctx.params
// });