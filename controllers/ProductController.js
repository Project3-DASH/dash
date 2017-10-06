// Node Dependencies
const express = require("express");
const path = require("path");
const body = require("body-parser");
//var models = require("../models/products.js");
const models = require(path.join(__dirname,"..","models"));

const router = express.Router();
const app = express();

// Extracts the sequelize connection from the models object
const sequelizeConnection = models.sequelize;

// Sync the tables
sequelizeConnection.sync();


// Create routes
// ----------------------------------------------------
router.get("/", function (req, res) {
    models.products.findAll({})

        .then (function (data) {
            // var hbsObject = {
            //     products: data
            // };
            res.render("index", data);
        });
});


router.post("/", function (req, res) {
    var productName = req.body.name;
    models.products.create({
        product_name: productName, //product_name: req.body.product_name
        // validation: false
    })
        .then (res.redirect("/"));
    // .then(function(res) {
    // res.redirect("/");
});


router.put("/:id", function(req,res) {
    models.products.update(
        // {validation: true},
        //var id = req.params.id,
        {where:
            {id: req.params.id}
        })
        .then(res.redirect("/"));
});

//I want destroy/truncate
// router.delete("/:id", function (req, res) {
//     //var burger_Id = req.params.id;
//     models.products.truncate({
//         //db.Booking.destroy({ truncate : true, cascade: false })
//         where:{
//             id: req.params.id
//             //id: burger_Id
//         }
//     })
//         .then(res.redirect("/"));
// });

// Export routes
module.exports = router;











