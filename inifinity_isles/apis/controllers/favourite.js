import Favourite from "../models/favModel.js";
import Product from "../models/productModel.js";

export const addFavouriteItem = async (req, res) => {
    try {
        const productId = req.params.pid;
        const userId = req.user.id;

        const existingFavourite = await Favourite.findOne({ user: userId, product: productId });
        
        if (existingFavourite) {
            return res.status(200).json({
                success: true,
                message: "Product already in favourite list",
                data: existingFavourite
            });
        }

        const newFavouriteItem = await Favourite.create({ user: userId, product: productId, favourite: true });
        return res.status(201).json({
            success: true,
            message: "Product added to favourite list",
            data: newFavouriteItem
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server problem"
        });
    }
};

export const removeFavouriteItem = async (req, res) => {
    try {
        const productId = req.params.pid;
        const userId = req.user.id;
        console.log(productId)
        console.log(userId)
        const existingFavourite = await Favourite.findOneAndDelete({ user: userId, product: productId });
        console.log(existingFavourite)
        return res.status(200).json({
            success: true,
            message: "Product removed from favourite list",
            data: existingFavourite
        })
    } catch (error){
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server problem"
        });
    }
}

export const fetchFavouriteItem = async(req, res) => {
    try {
        const userId = req.user.id;
        const existingFavourite = await Favourite.find({ user: userId }).populate({
            path: "product",
            populate: {
              path: "category",
            }})
        if(!existingFavourite){
            return res.status(404).json({
                success: false,
                message: "Favourite list is empty"
            });
        }
        return res.status(200).json({
            success: true,
            message: "Favourite list",
            length: existingFavourite.length,
            data: existingFavourite
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server problem"
        });
    }
}
