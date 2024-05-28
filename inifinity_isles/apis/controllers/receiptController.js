import Product from "../models/productModel.js";

export const savenUpdateReceipt = async (req, res) => {
  try {
    const data = req.body;
    const dataIds = data.map((item) => item.id);
    const products = await Product.find({});
    const commonElements = products.filter((item) => dataIds.includes(item.id));
    for (const commonElement of commonElements) {
      const matchingDataItem = data.find(
        (item) => item.id === commonElement.id
      );
      if (matchingDataItem) {
        // Subtract the quantity from the stock
        commonElement.stock -= matchingDataItem.qty;
        // Save the updated product
        await commonElement.save();
      }
    }
    return res.status(200).json({
      success: true,
      message: "Receipt saved successfully",
      data: commonElements,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server problem",
    });
  }
};

export const getReceipt = async (req, res) => {
  try {
    // const id = req.user.id;
    // const newImage = await Receipt.create({ user: id, RecieptImageUrl: url });
    return res.status(200).json({
      success: true,
      message: "Receipt saved successfully",
      data: req.body,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Internal server problem",
    });
  }
};
