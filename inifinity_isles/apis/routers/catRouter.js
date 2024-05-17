import express from 'express'
import { fetchAllCategory } from '../controllers/category.js'
const catRoute = express.Router()

catRoute.get('/all-categories', fetchAllCategory)

export default catRoute