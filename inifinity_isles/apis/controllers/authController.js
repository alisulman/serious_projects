import ecryptPassword from "../helpers/EncryptPassword.js";
import dcrryptPassword from "../helpers/dcryptPassword.js";
import decodeToken from "../helpers/decodeToken.js";
import getToken from "../helpers/generateToken.js";
import User from "../models/authModle.js";
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
        message: "User already exist",
      });
    }
    const securePassword = await ecryptPassword(password)
    const colors = genertarColorScheme()
    const newUser = await User.create({ username, email, password: securePassword, colors });
    const token = await getToken(newUser)
    return res.status(201).json({
      success: true,
      message: "User created successfully",
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
        message: "User does not exist",
      });
    }
    const securePassword = await dcrryptPassword(password, userExist.password)
    const token = await getToken(userExist)
    if (email === userExist.email && securePassword) {
      return res.status(200).json({
        success: true,
        message: "User signed in successfully",
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

export const updateRole = async(req, res) => {
  try {
    const id = req.params.id
    const role = req.params.role
    console.log(id)
    const newUser = await User.findByIdAndUpdate(id, {role: role}, {new: true})
    const token = await getToken(newUser)
    return res.status(201).json({
      success: true,
      message: "User role updated successfully",
      data: newUser,
      token: token
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export const fetchVendor = async(req, res) => {
  try {
    const userExist = await User.find({role: "seller"})
    if(!userExist){
      return res.status(200).json({
        success: false,
        message: 'No User here'
      })
    }
    const vendor = await User.find({role: "seller"})
    return res.status(200).json({
      success: true,
      data: vendor
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
