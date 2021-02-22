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

const static = require('koa-static');
app.use(static('static'))

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());

const session = require('koa-session');
app.keys = ['some secret'];
const CONFIG = {
  key: 'koa:sess',   //cookie key (default is koa:sess)
  maxAge: 10000,  // cookie的过期时间 maxAge in ms (default is 1 days)
};
app.use(session(CONFIG, app));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MallData', {useNewUrlParser: true, useUnifiedTopology: true});
const testSchema = new mongoose.Schema({
    username: {type: String},
    password: {type: String},
  }, {versionKey: false} // 去除"__v":0
)
const homeSchema = new mongoose.Schema({
  data:{type:Object},
  type:{type:String},
  page:{type:Number}
})
const TestModel = mongoose.model('Test', testSchema, 'home')
const multiModel = mongoose.model('Multi',homeSchema,'home')
const dataModel = mongoose.model('data',homeSchema,'home')

router.get('/', function (ctx, next) {
  console.log('首页')
  ctx.body = "首页";
})

router.get('/add', async (ctx) => {
  let items = await TestModel.find({}, function (err, docs) {

  });
  console.log(items)
  await ctx.render('index', {items})
})

router.get('/home/multidata',async (ctx)=>{
  console.log('multidata')
  let data = await multiModel.findOne({type:'multidata'},{_id:0 })
  console.log(data)
  ctx.body = data
})

router.get('/home/data',async (ctx)=>{
  let dataType = ctx.query.type
  let dataPage = Number(ctx.query.page)
  let data = await dataModel.findOne({type:dataType,page:dataPage},{_id:0 })
  ctx.body = data
})

router.post('/doAdd', async (ctx, next) => {
  let data = ctx.request.body
  ctx.body = data
  let result = await MyModel.create(data)
  console.log(result)
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