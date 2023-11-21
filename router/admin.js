/**
 * 管理端接口
 */
const Router = require('koa-router')
const admin = new Router()
const db = require('../utils/db')
const { errSqlMsg, bakcBody } = require('../utils/tool')


admin.get('/add', async (ctx) => {

    try {
        ctx.body = bakcBody(201, '数据异常1666', [])
    } catch (error) {
        ctx.body = bakcBody(201, '数据异常1', [])
    }
})


module.exports = admin