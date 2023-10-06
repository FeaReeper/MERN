const mongoose = require('mongoose')

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 characters"]
    },
    price: {
        type: String,
        required: [true, "Price is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [5, "Title must be at least 5 characters"]
    }
}, {timestamps: true})

const Product = mongoose.model('Product', ProductsSchema)

module.exports = Product