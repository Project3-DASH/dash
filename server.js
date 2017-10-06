const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
// const mysql = require('mysql');
const methodOverride = require("method-override");

const db = require(path.join(__dirname,"models"));
// const router = require(path.join(__dirname,"controllers","productController.js"));

const app = express();

const port = process.env.PORT || 3000;
//app.set('port', (process.env.PORT || 3001));

//Serve static content for the app from the "public" directory in the application directory.

//app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(methodOverride("_method"));

// Express only serves static assets in production
console.log("NODE_ENV: ", process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('client/build'));

    // Return the main index.html, so react-router render the route in the client
    // app.get('/', (req, res) => {
    //     res.sendFile(path.resolve('client/build', 'index.html'));
    // });
} else {
    app.use('/', express.static("client/public"));
}

//Routes
require("./routes/productRoute.js")(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
// app.get('*', (req, res) => res.status(200).send({
//     message: 'Welcome to the beginning of nothingness.',
// }));

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });






// Starts the server to begin listening
db.sequelize.sync().then(function () {
    app.listen(port, function() {
        console.log("App Listening on PORT " + port);
    })
});
