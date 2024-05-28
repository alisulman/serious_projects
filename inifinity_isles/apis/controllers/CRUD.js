import Product from "../models/productModel.js";
import shuffleArray from "../utils/shuffling.js";
import { createCategory } from "./category.js";

export const createProduct = async (req, res) => {
  try {
    const { title, description, stock, price, category, images } = req.body;
    const missingFields = [];
    if (!title) missingFields.push("title");
    if (!description) missingFields.push("description");
    if (!stock) missingFields.push("stock");
    if (!price) missingFields.push("price");
    if (!category) missingFields.push("category");
    if (!images) missingFields.push("image");

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `the following fields are required: ${missingFields.join(
          ", "
        )}`,
      });
    }
    const Id = req.user.id;
    const categoryId = await createCategory(category, Id);
    const newProduct = await Product.create({
      user: Id,
      title,
      description,
      stock,
      price,
      category: categoryId,
      images,
    });
    return res.status(201).json({
      success: true,
      message: "product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const fetchAllUserProduct = async (req, res) => {
  try {
    const userId = req.user.id;
    const existProducts = await Product.find({ user: userId })
      .sort({ createdAt: -1 })
      .populate("category");
    if (!existProducts) {
      return res.status(400).json({
        success: false,
        message: "products is not added yet",
      });
    }
    return res.status(200).json({
      success: true,
      message: "All products are here",
      length: existProducts.length,
      data: existProducts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const fetchAllProduct = async (req, res) => {
  try {
    const existProducts = await Product.find({}).sort({ createdAt: -1 }).populate('category');
    if (!existProducts) {
      return res.status(400).json({
        success: false,
        message: "products is not added yet",
      });
    }
    return res.status(200).json({
      success: true,
      message: "All products are here",
      length: existProducts.length,
      data: existProducts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const fetchSingleProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const existProduct = await Product.findById({ _id: productId }).populate('category');
    if (!existProduct) {
      return res.status(400).json({
        success: false,
        message: "product is not added yet",
      });
    }
    return res.status(200).json({
      success: true,
      message: "product is here",
      data: existProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { title, description, stock, price, category, images } = req.body;
    const missingFields = [];
    if (!title) missingFields.push("title");
    if (!description) missingFields.push("description");
    if (!stock) missingFields.push("stock");
    if (!price) missingFields.push("price");
    if (!category) missingFields.push("category");
    if (!images) missingFields.push("image");

    if (missingFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: `the following fields are required: ${missingFields.join(
          ", "
        )}`,
      });
    }
    console.log(title, description, stock, price, category, images);
    const productId = req.params.id;
    const newProduct = await Product.findByIdAndUpdate(
      { _id: productId },
      { $set: req.body },
      { new: true }
    );
    return res.status(201).json({
      success: true,
      message: "product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deltedProduct = await Product.findByIdAndDelete({ _id: productId });
    return res.status(201).json({
      success: true,
      message: "product deleted successfully",
      data: deltedProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const topUserProduct = async (req, res) => {
  try {
    const userId = req.params.id;
    const existProducts = await Product.find({ user: userId, ratings: { $gte: 4.8, $lte: 5 } });


    if (!existProducts) {
      return res.status(400).json({
        success: false,
        message: "products is not top rated added yet",
      });
    } 
    return res.status(200).json({
      success: true,
      length: existProducts.length,
      data: existProducts,
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const topProduct = async (req, res) => {
  try {
    const existProducts = await Product.find({ ratings: { $gte: 4.8, $lte: 5 } }).populate('category').sort({ createdAt: -1 });


    if (!existProducts) {
      return res.status(400).json({
        success: false,
        message: "products is not top rated added yet",
      });
    } 
    return res.status(200).json({
      success: true,
      length: existProducts.length,
      data: existProducts,
    })

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const shuffleProd = async (req, res) => {
  try {
    const page = req.params.page
    const limit = req.params.limit
    const existProducts = await Product.find({});
    const shuffleProds = await shuffleArray(existProducts)
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    const paginatedProd = shuffleProds.slice(startIndex, endIndex)
    if(!existProducts){
      return res.status(404).json({
        success: false,
        message: 'No product added yet',
      })
    }
    return res.status(200).json({
      success: true,
      length: paginatedProd.length,
      page: page,
      totalPages: Math.ceil(existProducts.length / limit),
      data: paginatedProd,
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    })
  }
    
}
 