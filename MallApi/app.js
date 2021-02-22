const Koa = require('koa')
const app = new Koa()

const Router = require('@koa/router') //注意：引入的方式
const router = new Router()

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MallData',
  {useNewUrlParser: true, useUnifiedTopology: true}).then(r => {})
const homeSchema = new mongoose.Schema({
  data: {type: Object},
  type: {type: String},
  page: {type: Number}
})
const multiModel = mongoose.model('Multi', homeSchema, 'home')
const dataModel = mongoose.model('data', homeSchema, 'home')

router.get('/home/multidata', async (ctx) => {
  console.log('multidata')
  let data = await multiModel.findOne({type: 'multidata'}, {_id: 0})
  ctx.body = data
})

router.get('/home/data', async (ctx) => {
  console.log('data')
  let dataType = ctx.query.type
  let dataPage = Number(ctx.query.page)
  let data = await dataModel.findOne({type: dataType, page: dataPage}, {_id: 0})
  ctx.body = data
})

app.use(router.routes()) //作用：启动路由
app.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('starting at http://localhost:3000/');
});