const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    product_image: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    product_description: {
        type: String,
        required: true
    },
    product_catagory: {
        type: String,
        required: true
    },
    product_price: {
        type: Number,
        required: true
    },
    product_stock: {
        type: Number,
        required: true
    }
});

const products = mongoose.model("product", productSchema);


module.exports = products;