const mysql=require('mysql');

function connect()
{
    const connection=mysql.createConnection({
        host:"192.168.1.73",
        database:"myapp_db",
        user:"root",
        password:"manager",
        port:7575
    })
    connection.connect();
    return connection;
}
module.exports={
    connect:connect
}