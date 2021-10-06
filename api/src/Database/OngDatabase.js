async function connect(){
    if(global.connection && global.connection.state !== 'disconnected'){
        return global.connection
    }
    const mysql = require("mysql2/promise")
    const connection = await mysql.createConnection("mysql://root:82553138@localhost:3306/Bethehero")
    console.log("Conectou")
    global.connection = connection;
    return connection   
}

module.exports = connect