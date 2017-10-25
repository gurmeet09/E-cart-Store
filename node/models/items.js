// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
// create the Schema
var ItemSchema = new Schema({
    
    price: { type: Number },
    name: { type: String },
    description: { type: String },
    image: { type: String },
});

// we need to create a model for using schema
var Item = mongoose.model('item', ItemSchema);

// make this available to our employee in our Node applications
module.exports = Item;
