var mongoose = require('mongoose');
var productSchema = mongoose.Schema({
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

var ProductModel = mongoose.model('products', productSchema); 
module.exports = ProductModel;