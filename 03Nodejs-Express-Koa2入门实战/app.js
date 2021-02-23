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
  maxAge: 10000,  // cookie的过期时间 maxAge in ms (default is 1 days)
};
app.use(session(CONFIG, app));

// multer
const multer = require('@koa/multer')
let storage = multer.diskStorage({
  //文件保存路径
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  //修改文件名称
  filename: function (req, file, cb) {
    let fileFormat = (file.originalname).split(".");  //以点分割成数组，数组的最后一项就是后缀名
    cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
  }
})
let upload = multer({storage});


router.get('/', function (ctx) {
  console.log('首页')
  ctx.body = "首页";
})

router.get('/add', async (ctx) => {
  await ctx.render('index')
})

router.post('/upload',upload.single('img'),async ctx => {
  console.log('ctx.file', ctx.file);
  ctx.body = 'done';
});

router.post('/multiupload',upload.array('mutilimg',2),async ctx => {
  console.log('ctx.files', ctx.files);
  ctx.body = 'done';
});

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