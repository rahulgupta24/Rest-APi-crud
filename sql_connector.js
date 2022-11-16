const mysql = require('mysql')
const myconnection = mysql.createPool(
    {
        user: "root",
        password: "",
        host: "localhost",
        database: "crud"
    }
)
module.exports = myconnection
