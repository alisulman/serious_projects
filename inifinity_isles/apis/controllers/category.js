import Category from "../models/category.js";

export const createCategory = async (category, id) => {
  const existCategory = await Category.findOne({ category });
  if (existCategory) {
    return existCategory._id;
  } else {
    const newCategory = await Category.create({
      user: id,
      category: category,
    });
    return newCategory._id; 
  }
};
