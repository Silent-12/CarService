const Router = require('koa-router')
const router = new Router();
const user = require('./user')
const admin = require('./admin')

// 接口前缀,端口转发用,正则匹配/car即可
const prefix = '/car'

// 注册接口
router.use(`${prefix}/user`, user.routes(), user.allowedMethods())
router.use(`${prefix}/admin`, admin.routes(), admin.allowedMethods())

module.exports = router