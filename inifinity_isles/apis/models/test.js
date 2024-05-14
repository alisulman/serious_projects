import mongoose, { Schema } from 'mongoose'

const imageSchema = new Schema({
    image: {
        type: String,
        default: ""
    }
}: {timestamps: true})

const Image = mongoose.model('image', imageSchema)

export default Image