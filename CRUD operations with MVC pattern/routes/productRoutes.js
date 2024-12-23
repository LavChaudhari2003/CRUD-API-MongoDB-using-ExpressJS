const express = require('express')  
const router = express.Router();

const {getProducts,createProduct,updateProduct,deleteProduct} = require('../controllers/productController')

// Read/View
router.get('/products',getProducts);

// Create/Insert
router.post('/products',createProduct);

// Update
router.put('/products/:id',updateProduct);

//Delete
router.delete('/products/:id',deleteProduct);




module.exports = router;