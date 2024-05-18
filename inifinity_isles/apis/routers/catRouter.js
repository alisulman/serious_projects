import express from 'express'
import { fetchAllCategory, fetchSingleCategory } from '../controllers/category.js'
const catRoute = express.Router()

catRoute.get('/all-categories', fetchAllCategory)
catRoute.get('/category/:ctid', fetchSingleCategory)

export default catRoute