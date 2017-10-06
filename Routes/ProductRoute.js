// Dependencies
// =============================================================
// Requiring our products model
const db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
    // GET route for getting all of the products
    app.get("/api/products", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.products.findAll({}).then(function(dbProducts) {
            // We have access to the products as an argument inside of the callback function
            res.json(dbProducts);
        });
    });
    // POST route for saving a new products
    app.post("/api/products", function(req, res) {
        console.log(req.body);
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property (req.body)
        db.products.create({
            name: req.body.name,
            // validation: req.body.validation
        }).then(function(dbProducts) {
            // We have access to the new products as an argument inside of the callback function
            res.json(dbProducts);
        });
    });
    // DELETE route for deleting product. We can get the id of the product we want to delete from
    // req.params.id
    app.delete("/api/products/:id", function(req, res) {
    });
    // PUT route for updating products. We can get the updated products from req.body
    app.put("/api/products", function(req, res) {
    });
};