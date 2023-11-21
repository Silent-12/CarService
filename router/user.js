/**
 * 用户端接口
 */
const Router = require('koa-router')
const dayjs = require('dayjs')
const user = new Router()
const db = require('../utils/db')
const { bakcBody } = require('../utils/tool')
const snowId = require('simple-flakeid')
const gen1 = new snowId.SnowflakeIdv1({ workerId: 1 })


user.post('/add', async (ctx) => {

    try {
        let { name, stutID, phone, end, carNum, dateTime, mode } = ctx.request.body
        carNum = Number(carNum)
        mode = Number(mode)
        phone = phone.toString()
        stutID = stutID.toString()

        // 判断规则
        if (!name || !end || !dateTime || carNum <= 0 || mode <= 0 || mode > 2 || phone.length != 11 || stutID < 5) {
            ctx.body = bakcBody(201, '数据异常2', [])
            return
        }

        // 生成入库时间
        const generate_time = dayjs().valueOf()
        // 生成订单号
        const orderNumber = gen1.NextId() + ""
        // 默认订单状态
        const order_status = 1
        // 默认金额
        const order_amount = "0.00"

        const sql_add = `insert into reserve_info 
        (name,phone,stutID,locations,carNumber,departure_time,carMode,generate_time,orderNumber,order_status,order_amount) 
        values  
        ('${name}','${phone}','${stutID}','${end}',${carNum},'${dateTime}',${mode},'${generate_time}','${orderNumber}','${order_status}','${order_amount}')`

        db.query(sql_add)
        ctx.body = bakcBody(200, '提交成功', [])

    } catch (error) {
        ctx.body = bakcBody(201, '数据异常1', [])
    }
})


module.exports = user