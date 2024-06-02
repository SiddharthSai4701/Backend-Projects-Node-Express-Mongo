const mongoose = require('mongoose');

// Model for product
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"],
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        
        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        } 
    },

    // Two fields - one for created at and one for updated at
    {
        timestamps: true
    }
);

// Allowing Mongo to use this
// Here, we give singular but Mongo will make it plural and it will also be converted to lower case
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

// THis model will be used for creating products in the db