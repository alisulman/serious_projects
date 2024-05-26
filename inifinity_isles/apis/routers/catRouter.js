import express from 'express'
import { fetchAllCategory, fetchCategoryByName, fetchSingleCategory } from '../controllers/category.js'
const catRoute = express.Router()

catRoute.get('/all-categories', fetchAllCategory)
catRoute.get('/category/:ctid', fetchSingleCategory)
catRoute.get('/category-name/:cname', fetchCategoryByName)

export default catRoute