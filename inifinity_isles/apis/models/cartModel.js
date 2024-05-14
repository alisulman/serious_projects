import mongoose, { Schema } from 'mongoose'

const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    products:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products'
    }

}, {timestamps: true})

const Cart = mongoose.model('cart', cartSchema)

export default Cart