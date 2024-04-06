import Product from "../models/productModel.js"

export const fetchallProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        if (products) {
            res.status(200).json({
                success: true,
                data: products
            })
        } else {
            res.status(404).json({
                success: false,
                message: "products not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server problem. Please try again later."
        })
    }
}

export const fetchSingleProducts = async (req, res) => {
    try {
        const id = req.params.id
        const product = await Product.findById({ _id: id })
        if (product) {
            res.status(200).json({
                success: true,
                data: product
            })
        } else {
            res.status(404).json({
                success: false,
                message: "products not found"
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server problem. Please try again later."
        })
    }
}

export const createProduct = async (req, res) => {
    try {
        const { title, description, price, rating, stock } = req.body
        if (!title || !description || !price || !rating || !stock) {
            res.status(400).json({
                success: false,
                message: "Required fields"
            })
        } else {
            const newProduct = await Product.create({ title, description, price, rating, stock });
            res.status(200).json({
                success: true,
                data: newProduct
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server problem. Please try again later."
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const id = req.params.id
        const { title, description, price, rating, stock } = req.body
        const newProduct = await Product.findByIdAndUpdate({ _id: id }, { title, description, price, rating, stock }, { new: true });
        res.status(200).json({
            success: true,
            data: newProduct
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server problem. Please try again later."
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id
        const newProduct = await Product.findByIdAndDelete({ _id: id });
        res.status(200).json({
            success: true,
            data: newProduct
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server problem. Please try again later."
        })
    }
}