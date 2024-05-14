import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: {
      type: String,
      default: "",
    },
    reviews: {
      type: [],
      default: "",
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", productSchema);

export default Product;
