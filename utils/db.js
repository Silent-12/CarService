const mysql = require('mysql')


// 连接池
let pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'car_rental_sys',
    charset: 'utf8mb4'
})


/**
 * mysql 增删改查
 * @param {String} sql 需要执行的sql语句
 */
function query (sql) {
    return new Promise((resolve, reject) => {
        pool.getConnection(function (err, connection) { //建立连接,异常就返回
            if (err) reject(err)
            connection.query(sql, function (err, result) { //查数据
                connection.release() //中断连接
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        })
    })
}


module.exports = {
    query
}
