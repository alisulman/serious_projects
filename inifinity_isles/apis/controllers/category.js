import Category from "../models/category.js";
import Product from "../models/productModel.js";

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

export const fetchAllCategory = async (req, res) => {
  try {
    const existCategory = await Category.find().sort({ createdAt: -1 });
    if (!existCategory) {
      return res.status(400).json({
        success: false,
        message: "category is not added yet",
      });
    }
    return res.status(200).json({
      success: true,
      length: existCategory.length,
      data: existCategory,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const fetchSingleCategory = async (req, res) => {
  try {
    const id = req.params.ctid 
    const existProducts = await Product.find({ category : id })
    if(!existProducts){
      return res.status(400).json({
        success: false,
        message: "product is not avaliable yet",
      });
    } 
    return res.status(200).json({
      success: true,
      length: existProducts.length,
      data: existProducts,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}