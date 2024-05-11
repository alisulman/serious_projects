import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
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
    category: {
      type: String,
      required: true,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    images: {
      type: String,
      default: ""
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