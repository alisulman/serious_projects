import mongoose, { Schema } from "mongoose";

const authSchema = new Schema({
  username: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["admin", "user", "buyer", "seller"],
    default: "user"
  },
  colors: {
    type: Array,
    default: []
  }
}, {timestamps: true});

const User = mongoose.model('users', authSchema)

export default User