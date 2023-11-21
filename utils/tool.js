const dayjs = require('dayjs');

/**
 * @Author: HLH
 * @Date: 2023-10-04 20:48:47
 * @email: 305701970@qq.com
 * @Description:  Error统一打印
 * @param {*} api_url
 * @param {*} user_id
 * @param {*} error
 */
function errSqlMsg (api_url = "null", user_id = "null", error = "") {
    const Time = dayjs().format('YYYY-MM-DD HH:mm:ss')
    console.log(`[${Time}] ` + " 风险: =>> " + api_url + " id: =>> " + user_id + " error: =>> " + error);
}

/**
 * @Author: HLH
 * @Date: 2023-10-04 21:08:21
 * @email: 305701970@qq.com
 * @Description: 用于接口返回相关参数
 * @param {*} code
 * @param {*} msg
 * @param {*} data
 */
function bakcBody (code = 0, msg = "查询成功", data = "") {
    let info = {
        code,
        msg,
        data
    }
    return info
}


module.exports = {
    errSqlMsg, bakcBody
}