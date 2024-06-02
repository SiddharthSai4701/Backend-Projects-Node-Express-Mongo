const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product.controller.js')

// API to get all products
router.get('/', productsController.getAllProducts);

// API to get a product by ID
router.get('/:id', productsController.getProductsById);

// API to create a new product
router.post('/', productsController.createProduct);

// API to update a product by ID
router.put('/:id', productsController.updateProduct)

// API to delete an existing product by ID
router.delete('/:id', productsController.deleteProductById)

module.exports = router;