import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    category:{
        type: String,
        required: true,
        unique: true,
    },
}, {timestamps: true})

const Category = mongoose.model('categories', categorySchema)

export default Category