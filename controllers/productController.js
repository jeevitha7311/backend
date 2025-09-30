const ProductModal = require('../models/productModel');
//Get all products -/api/v1/products
exports.getProducts = async (req,res,next) => {
    const query = req.query.keyword ? {
        name: {
            $regex: req.query.keyword,
            $options: 'i'
        }
    } : {}
    const products = await ProductModal.find(query);
    res.json({
        success: true,
        products
    })
}
//Get single product -/api/v1/product/:id
exports.getSingleProduct = async (req,res,next) => {
    try{
         const product = await ProductModal.findById(req.params.id);
    res.json({
        success: true,
       product
    })
    }
    catch(error){
        res.status(404).json({
            success: false,
            message: 'Product not found'
        })
    }
   
}