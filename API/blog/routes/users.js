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
