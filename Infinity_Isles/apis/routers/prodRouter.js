import express from 'express'
import * as products from '../controllers/prodController.js';
const productRouter = express.Router();

// fetch all Products 
productRouter.route('/page-:page/products-:perpage').get(products.fetchallProducts)

// fetch single Product
productRouter.route('/:id').get(products.fetchSingleProducts)

// create Products
productRouter.route('/add-product').post(products.createProduct)

// update Products
productRouter.route('/edit/:id').put(products.updateProduct)

// delete Products
productRouter.route('/vanish/:id').delete(products.deleteProduct)

export default productRouter;