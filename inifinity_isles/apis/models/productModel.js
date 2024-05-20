import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    favourite: {
      type: Schema.Types.ObjectId,
      ref: 'favourites'
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
    totalPrice: {
      type: Number,
      default: 0,
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
