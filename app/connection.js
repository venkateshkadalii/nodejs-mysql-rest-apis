const mysql = require('mysql')

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'world',
    multipleStatements: true
})

dbConnection.connect((error) => {
    if(error){
        console.log('db connection failed')
    } else {
        console.log('db connection success')
    }
})

module.exports = dbConnection