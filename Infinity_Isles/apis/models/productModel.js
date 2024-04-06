import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    rating: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    }
}, {timestamps: true})

const  Product = mongoose.model('products', productSchema)

export default Product;