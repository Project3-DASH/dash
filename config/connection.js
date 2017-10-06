// Node Dependency
const mysql = require("mysql");

// Set up Heroku Deployment
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    // Set up local MySQL connection
    connection = mysql.createConnection({
        host     : "localhost",
        port     : 3306,
        user     : "root",
        password : "", // Add your password
        database : "dash" // Add your database
    });
}

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;





// "production": {
//     "username": "root",
//         "password": null,
//         "database": "database_production",
//         "host": "127.0.0.1",
//         "dialect": "mysql"
// }
// }