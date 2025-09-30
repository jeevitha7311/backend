const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    description: String,
    ratings: String,
    images: [{
        image: String
    }
    ],
    category: String,
    seller: String,
    stock: String,
    numOfReviews: String,
    createdAt: Date
});

const ProductModal = mongoose.model('Product',productSchema);

module.exports = ProductModal;