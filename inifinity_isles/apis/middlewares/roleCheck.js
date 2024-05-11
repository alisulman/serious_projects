import User from "../models/authModle.js";

const checkRole = async (req, res, next) => {
  try {
    const userExist = await User.findById(req.user.id);
    const role = req.params.role
    if (!userExist) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }
    if (userExist.role !== role) {
      return res.status(401).json({
        success: false,
        message: "unauthorized user",
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

export default checkRole;

