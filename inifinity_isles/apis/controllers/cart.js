import Cart from "../models/cartModel.js";
import Product from "../models/productModel.js";

export const addToCart = async (req, res) => {
  try {
    const Id = req.params.cpid;
    const id = req.user.id;
    const productExist = await Cart.findOne({ user: id, products: Id }).populate('products');
    if (productExist) {
      const stock = productExist.products.stock;
      if (stock === 0) {
        return res.status(400).json({
          success: false,
          message: "Product is out of stock",
        });
      } else {
        await Product.findOneAndUpdate(
          { _id: Id },
          { $inc: { quantity: 1, stock: -1 } },
          { new: true }
        );
        const price = productExist.products.price;
        const totalPrice = productExist.products.totalPrice;
        const allPrice = totalPrice + price;
        const sameCartProduct = await Product.findOneAndUpdate(
          { _id: Id },
          { totalPrice: allPrice },
          { new: true }
        );
        return res.status(200).json({
          success: true,
          data: sameCartProduct,
        });
      }
    } else {
      await Cart.create({ user: id, products: Id });
      const sameProduct = await Product.findOneAndUpdate(
        { _id: Id },
        { $inc: { quantity: 1, stock: -1 } },
        { new: true }
      );
      const price = sameProduct.price;
      const totalPrice = sameProduct.totalPrice;
      const allPrice = totalPrice + price;
      const sameCartProduct = await Product.findOneAndUpdate(
        { _id: Id },
        { totalPrice: allPrice },
        { new: true }
      );
      return res.status(201).json({
        success: true,
        totalPrice: allPrice,
        data: sameCartProduct,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeFromCart = async (req, res) => {
  try {
    const Id = req.params.cpid;
    const productExist = await Product.findOne({ _id: Id });
    const stock = productExist.stock;
    const quantity = productExist.quantity;
    const price = productExist.price;
    const totalPrice = productExist.totalPrice;
    const newStock = stock + quantity;
    const newQuantity = 0;
    const newPrice = price / quantity;
    const newTotalPrice = 0
    await Product.findOneAndUpdate(
      { _id: Id },
      { stock: newStock, quantity: newQuantity, price: newPrice, totalPrice: newTotalPrice },
      { new: true }
    );
    const deletedCartItem = await Cart.findOneAndDelete({ products: Id });
    return res.status(201).json({
      success: true,
      data: deletedCartItem,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCart = async (req, res) => {
  try {
    const id = req.user.id;
    const existCart = await Cart.find({ user: id }).populate("products");
    // for quantity
    const quantity = await Product.aggregate([
      {
        $group: {
          _id: null,
          totalQuantity: { $sum: "$quantity" },
        },
      },
    ]);
    const totalQuantity = quantity.length > 0 ? quantity[0].totalQuantity : 0;

    //for price total
    let totalPrice = 0;
    for (let i = 0; i < existCart.length; i++) {
      totalPrice += existCart[i].products.totalPrice;
    }

    if (existCart) {
      return res.status(200).json({
        success: true,
        cartLength: existCart.length,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice,
        data: existCart,
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Cart is empty",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const incrementCart = async (req, res) => {
  try {
    const Id = req.params.cpid;
    const sameitem = await Product.findOne({ _id: Id });
    const stock = sameitem.stock;
    if (stock === 0) {
      return res.status(400).json({
        success: false,
        message: "Product is out of stock",
      });
    }
    await Product.findOneAndUpdate(
      { _id: Id },
      { $inc: { quantity: 1, stock: -1 } },
      { new: true }
    );
    const sameItem = await Product.findOne({ _id: Id });
    const price = sameItem.price;
    const totalPrice = sameItem.totalPrice;
    const allPrice = totalPrice + price;
    const sameCartProduct = await Product.findOneAndUpdate(
      { _id: Id },
      { totalPrice: allPrice },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      data: sameCartProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const decrementCart = async (req, res) => {
  try {
    const Id = req.params.cpid;
    await Product.findOneAndUpdate(
      { _id: Id },
      { $inc: { quantity: -1, stock: 1 } },
      { new: true }
    );
    const sameItem = await Product.findOne({ _id: Id });
    const price = sameItem.price;
    const totalPrice = sameItem.totalPrice;
    const allPrice = totalPrice - price;
    const sameCartProduct = await Product.findOneAndUpdate(
      { _id: Id },
      { totalPrice: allPrice },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      data: sameCartProduct,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
