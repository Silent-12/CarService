const Koa = require('koa2')
const router = require('./router/index')
const app = new Koa()
const cors = require("@koa/cors")
const { koaBody } = require("koa-body")
const port = 3000


/* 
    router.route():启动路由
    router.allowedMethods():允许任何请求
    ctx.params           路由
    ctx.request.query    GET
    ctx.request.body     POST
*/

// 注册服务
app.use(cors())
app.use(koaBody());

// 启动服务
app.use(router.routes(), router.allowedMethods())
app.listen(port, () => {
    console.log('server http://127.0.0.1:' + port);
})