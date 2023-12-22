var mongoose = require('mongoose');
var productChema = mongoose.Schema({
    productname : {
        type: String,
        required: true,
     },
    description : {
        type: String,
        required: true,
     },
    image : {
        type: String,
        required: true,
     },
    price : {
        type: Number,
        required: true,
     },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'brands'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    }
});

var ProductModel = mongoose.model('products', productChema); 
module.exports = ProductModel;