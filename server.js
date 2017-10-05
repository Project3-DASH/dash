const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;
//app.set('port', (process.env.PORT || 3001));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Express only serves static assets in production
console.log("NODE_ENV: ", process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

// Return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
    res.sendFile(path.resolve('client/build', 'index.html'));
});
}
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Connect to MySQL db
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "dash"
});

connection.connect();

app.get("/api/allProducts",function(req,res){
    connection.query('SELECT * FROM products', function(err, rows, fields) {
        connection.end();
        if (!err)
            console.log('The solution is: ', rows);
        else
            console.log('Error while performing Query.');
    });
});

app.post("/api/addProducts",function(req,res){
    connection.query("INSERT INTO products (name, company, category, image) VALUES ('test', 'test', 'test', 'test');", function(err, rows, fields) {
        connection.end();
        if (!err)
            console.log('The solution is: ', rows);
        else
            console.log('Error while performing Query.');
    });
});

app.listen(port, () => console.log("Listening on port " + port));
