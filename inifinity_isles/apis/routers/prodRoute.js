import express from 'express'
import * as product from '../controllers/CRUD.js'
import authMiddleware from '../middlewares/authMiddleware.js';
const prodRoute = express.Router()

prodRoute.post('/create-product/:token',authMiddleware , product.createProduct);
prodRoute.get('/fetch-all-user-product/:token',authMiddleware , product.fetchAllUserProduct);
prodRoute.get('/fetch-all-product', product.fetchAllProduct);
prodRoute.get('/fetch-single-product/:id', product.fetchSingleProduct);
prodRoute.put('/update-product/:id', product.updateProduct);
prodRoute.delete('/delete-product/:id', product.deleteProduct);
prodRoute.delete('/delete-product/:id', product.deleteProduct);
prodRoute.get('/topRated-user-products/:id', product.topUserProduct);
prodRoute.get('/topRated-products', product.topProduct);

export default prodRoute