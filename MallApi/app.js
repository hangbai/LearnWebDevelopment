const Koa = require('koa')
const app = new Koa()

const Router = require('@koa/router') //注意：引入的方式
const router = new Router()

const cors = require('koa2-cors') // 跨域
app.use(cors())

router.prefix('/api/mall')

app.use(async (ctx, next) => {
  await next();
  if (ctx.status == 404) {
    ctx.body = "以下是Api接口\n" +
      '/api/mall/home/multidata\n' +
      '/api/mall/home/data?type=pop&page=1\n' +
      '/api/mall/detail?iid=具体的值\n' +
      '/api/mall/category\n' +
      '/api/mall/subcategory?maitKey=具体的值\n' +
      "/api/mall/subcategory/detail?miniWallkey=具体的值&type=sell\n" +
      "/api/mall/recommend"
  }
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MallData',
  {useNewUrlParser: true, useUnifiedTopology: true}).then(r => {
})
const homeSchema = new mongoose.Schema({type: String, page: Number})
const detailSchema = new mongoose.Schema({iid: String})
const maitKeySchema = new mongoose.Schema({maitKey: String})
const miniWallkeySchema = new mongoose.Schema({type: String, miniWallkey: String, list:Array})

const multiModel = mongoose.model('Multi', homeSchema, 'home')
const dataModel = mongoose.model('Data', homeSchema, 'home')
const detailModel = mongoose.model('Detail', detailSchema, 'detail')
const categoryModel = mongoose.model('Category', homeSchema, 'category')
const maitKeyModel = mongoose.model('MaitKey', maitKeySchema, 'category')
const miniWallkeyModel = mongoose.model('MiniWallkey', miniWallkeySchema, 'category')
const recommendModel = mongoose.model('Recommend', homeSchema, 'home')

router.get('/home/multidata', async (ctx) => {
  console.log('multidata')
  let data = await multiModel.findOne({type: 'multidata'}, {_id: 0})
  ctx.body = data
})

router.get('/home/data', async (ctx) => {
  console.log('data')
  let dataType = ctx.query.type
  let dataPage = Number(ctx.query.page)
  if (dataType && dataPage) {
    let data = await dataModel.findOne({type: dataType, page: dataPage}, {_id: 0})
    ctx.body = data
  } else {
    ctx.body = 'page和type(sell/pop/new三个其中之一)是必传参数.\n' +
      '格式: /home/data?page=1&type=sell'
  }
})

router.get('/detail', async (ctx) => {
  console.log('data')
  let iid = ctx.query.iid
  if (iid) {
    let data = await detailModel.findOne({iid: iid}, {_id: 0})
    ctx.body = data
  } else {
    ctx.body = '格式: /detail?iid=具体的值'
  }
})

router.get('/category', async (ctx) => {
  console.log('category')
  let data = await categoryModel.findOne({type: 'category'}, {_id: 0})
  ctx.body = data
})

router.get('/subcategory', async (ctx) => {
  console.log('subcategory', ctx.query.maitKey)
  let maitKey = ctx.query.maitKey
  if (maitKey) {
    let data = await maitKeyModel.findOne({maitKey: maitKey}, {_id: 0})
    ctx.body = data
  } else {
    ctx.body = 'subcategory中maitKey参数没有传, 是必传参数.\n' +
      '格式: /subcategory?maitKey=具体的值'
  }
})

router.get('/subcategory/detail', async (ctx) => {
  console.log('subcategory detail')
  let dataType = ctx.query.type
  let miniWallkey = ctx.query.miniWallkey
  if (dataType && miniWallkey) {
    let data = await miniWallkeyModel.findOne({type: dataType, miniWallkey: miniWallkey}, {_id: 0})
    ctx.body = data.list
  } else {
    ctx.body = 'miniWallkey和type(sell/pop/new三个其中之一)是必传参数.\n' +
      '格式: /subcategory/detail?miniWallkey=具体的值&type=sell'
  }
})

router.get('/recommend', async (ctx) => {
  console.log('recommend')
  let data = await recommendModel.findOne({type: 'recommend'}, {_id: 0})
  ctx.body = data
})

app.use(router.routes()) //作用：启动路由
app.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('starting at http://localhost:3000/');
});