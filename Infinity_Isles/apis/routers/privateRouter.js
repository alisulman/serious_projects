import express from 'express'
import * as router from '../controllers/privateContoller.js'
import privateMiddleware from '../middlewares/privateMiddleware.js'
const privateRoute = express.Router()

privateRoute.get('/dashboard',privateMiddleware , router.privateRoute)

export default privateRoute