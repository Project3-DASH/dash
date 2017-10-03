// // Require mongoose
// const mongoose = require("mongoose");
//
// // Create Schema class
//  const Schema = mongoose.Schema;
//
// // Create article schema
// const ProductSchema = new Schema({
//
//     // `title` (Title of the stored article from nytimes.com)
//     title: {
//         type: String,
//         required: true,
//         // unique: true
//     },
//     author: {
//         type: String,
//         // required: true,
//         //   unique: true
//     },
//
//     // `date` (publish date and time of the article)
//     date: {
//         type:Date,
//         default:Date.now,
//         // unique: true
//     },
//
//     // url is a required string
//     link: {
//         type: String,
//         required: true,
//         // unique: true
//     },
//     saved:{
//         type:Boolean,
//         default:false
//     },
//     snippet:{
//         type:String
//     }
//
// });
//
// // Create the Article model with the ArticleSchema
// const Article = mongoose.model("Article", ArticleSchema);
//
// // Export the model
// module.exports = Article;



// create the code that will call the ORM functions using burger specific input for the ORM
// var burger = {
//     all: function (cb) {
//         orm.selectAll("burgers", function(res){
//             cb(res);
//         });
//     },
//
//     create: function (vals, cb) {
//         orm.insertOne(vals, function (res) {
//             cb(res);
//         });
//     },
//
//     update: function (vals, id, cb) {
//         orm.updateOne(vals,id, function (res) {
//             cb(res);
//         });
//     }
// };
//
//
// module.exports = burger;