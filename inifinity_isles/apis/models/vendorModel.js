import mongoose, { Schema } from "mongoose";

const vendorSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  role: {
    type: String,
    default: "",
  }
});

const Vendor = mongoose.model("vendors", vendorSchema);

export default Vendor;  
