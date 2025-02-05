import ecryptPassword from "../helpers/EncryptPassword.js";
import dcrryptPassword from "../helpers/dcryptPassword.js";
import decodeToken from "../helpers/decodeToken.js";
import getToken from "../helpers/generateToken.js";
import User from "../models/authModle.js";
import Product from "../models/productModel.js";
import Vendor from "../models/vendorModel.js";
import genertarColorScheme from "../utils/colorSchemeGenerater.js";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const emptyFelds = [];
    if (!email) emptyFelds.push("email");
    if (!password) emptyFelds.push("password");
    if (emptyFelds.length > 0) {
      return res.status(400).json({
        success: false,
        message: `${emptyFelds.join(", ")} ${
          emptyFelds.length === 1 ? "is" : "are"
        } required`,
      });
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(409).json({
        success: false,
        message: "Email or password is incorrect",
      });
    }
    const securePassword = await ecryptPassword(password);
    const colors = genertarColorScheme();
    const newUser = await User.create({
      username,
      email,
      password: securePassword,
      colors,
    });
    const token = getToken(newUser);
    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: newUser,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const emptyFelds = [];
    if (!email) emptyFelds.push("email");
    if (!password) emptyFelds.push("password");
    if (emptyFelds.length > 0) {
      return res.status(400).json({
        success: false,
        message: `${emptyFelds.join(", ")} ${
          emptyFelds.length === 1 ? "is" : "are"
        } required`,
      });
    }
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(404).json({
        success: false,
        message: "Email or password is incorrect",
      });
    }
    const securePassword = await dcrryptPassword(password, userExist.password);
    const token = getToken(userExist);
    if (email === userExist.email && securePassword) {
      return res.status(200).json({
        success: true,
        message: "Successfully Loged in",
        data: userExist,
        token: token,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateRole = async (req, res) => {
  try {
    const id = req.params.id;
    const role = req.params.role;
    const newUser = await User.findByIdAndUpdate(
      id,
      { role: role },
      { new: true }
    );
    const token = getToken(newUser);
    if (role === "seller") {
      const existRole = await Vendor.findOne({ user: id });
      if (existRole) {
        return res.status(201).json({
          success: true,
          message: "User role updated successfully",
          data: newUser,
          token: token,
          vendor: existRole,
        });
      }
      const newRole = await Vendor.create({ user: id, role: role });
      return res.status(201).json({
        success: true,
        message: "User role updated successfully",
        data: newUser,
        token: token,
        vendor: newRole,
      });
    }
    return res.status(201).json({
      success: true,
      message: "User role updated successfully",
      data: newUser,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const fetchVendor = async (req, res) => {
  try {
    const vendor = await Vendor.find({ role: "seller" })
      .populate("user")
      .sort({ createAt: -1 });
    if (!vendor) {
      return res.status(200).json({
        success: false,
        message: "No User here",
      });
    }
    return res.status(200).json({
      success: true,
      length: vendor.length,
      data: vendor,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const findUser = async (req, res) => {
  try {
    const pid = req.params.pid;
    const existProduct = await Product.findOne({_id: pid})
    if(!existProduct){
      return res.status(404).json({
        success: false,
        id: pid,
        message: "Product not found",
      });
    }
    const existUser = await User.findById({_id: existProduct.user});
    if (!existUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      data: existUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
