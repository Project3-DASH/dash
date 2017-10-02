const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const port = process.env.PORT || 3000;


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

connection.connect((err) => {
	if(err) throw err;
	console.log("Connected to DB!");
});


let app = express();

// app.set('views', path.join(__dirname, './client/public/index'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use('/', index);

app.listen(port, () => console.log("Listening on port " + port));
