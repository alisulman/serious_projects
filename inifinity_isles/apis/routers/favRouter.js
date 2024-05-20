import express from 'express'
import * as Fav from '../controllers/favourite.js'
import authMiddleware from '../middlewares/authMiddleware.js'
const favRouter = express.Router()

favRouter.get('/add-to-favourite-list/:pid/:token', authMiddleware, Fav.addFavouriteItem)
favRouter.get('/all-favourite-list/:token', authMiddleware, Fav.fetchFavouriteItem)
favRouter.delete('/remove-from-favourite-list/:pid/:token', authMiddleware, Fav.removeFavouriteItem)

export default favRouter