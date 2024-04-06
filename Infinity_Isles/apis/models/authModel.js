import mongoose, { Schema } from 'mongoose'
import { type } from 'os'

const userSchema = new Schema({
    username:{type: String, default: ""},
    email:{type: String, required: true},
    password:{type: String, required: true},
    role: {type: [String], enum: ['Admin', 'Buyer', 'Seller'], default: "Buyer"}
}, {timestamps: true})

const User = mongoose.model("users", userSchema)

export default User;   