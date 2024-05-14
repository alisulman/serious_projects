import Category from "../models/category.js"

export const createCategory = async(category, id) =>{
    const newCategory = await Category.create({
        user: id,
        category: category,
    })
    return newCategory._id
}