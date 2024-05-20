import mongoose, { Schema } from 'mongoose'

const favSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'products'
    },
    favourite: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Favourite = mongoose.model('favourite', favSchema)

export default Favourite