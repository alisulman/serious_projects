import express from 'express'
import * as Cart from '../controllers/cart.js'
import authMiddleware from '../middlewares/authMiddleware.js'
const cartRoute = express.Router()

cartRoute.post('/add-to-cart/:cpid/:token', authMiddleware, Cart.addToCart)
cartRoute.delete('/remove-from-cart/:cpid', Cart.removeFromCart)
cartRoute.get('/get-all-cart/:token', authMiddleware, Cart.getCart)
cartRoute.post('/increment-cart/:cpid', Cart.incrementCart)
cartRoute.post('/decrement-cart/:cpid', Cart.decrementCart)

export default cartRoute