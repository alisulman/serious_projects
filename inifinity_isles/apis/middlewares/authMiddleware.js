import decodeToken from "../helpers/decodeToken.js";
import User from "../models/authModle.js";

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.params.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "unauthroized user",
      });
    }
    const verification = decodeToken(token);
    req.user = verification;
    const userExist = await User.findById(req.user.id);
    if (!userExist) {
      return res.status(404).json({
        success: false,
        message: "unauthroized user",
      });
    }
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "Something went wrong",
    });
  }
};

export default authMiddleware;
