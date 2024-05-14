import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    category:{
        type: String,
        required: true,
        unique: true,
    },
}, {timestamps: true})

const Category = mongoose.model('category', categorySchema)

export default Category