// Importing the product model that was created
const Product = require('../models/product.model.js');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const getProductsById = async (req, res) => {
    try {
        const { id } = req.params;
        const products = await Product.findById(id);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const updateProduct = async (req, res) => {
    try {
        
        const { id } = req.params;

        // Pass the id of the object to be updated as well as the body sent in the req
        // the body that's been sent is the new data that must be updated in the db
        const product = await Product.findByIdAndUpdate(id, req.body);
        
        // if product doesn't exist
        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }

        // It's a good idea to check that the product has been updated so...
        const updatedProduct = await Product.findById(id);
        res.status(200).json({updatedProduct});

    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

const deleteProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const product = await Product.findByIdAndDelete(id);

        if(!product) {
            return res.status(404).json({message: "Product not found"});
        }

        res.status(200).json({message: "Product deleted successfully"});
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};


module.exports = {
    getAllProducts,
    getProductsById,
    createProduct,
    updateProduct,
    deleteProductById
}