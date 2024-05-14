import express from "express";
import User from "../models/authModle.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import checkRole from "../middlewares/roleCheck.js";
const privateRoute = express.Router();

privateRoute.get("/private/:token", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: "This is a private route",
  });
});

privateRoute.get(
  "/checkRole/:role/:token",
  authMiddleware,
  checkRole,
  async (req, res) => {
    const user = await User.findById(req.user.id);
    if (user) {
      res.status(200).json({
        success: true,
        message: `You are a ${user.role}`,
        data: user,
      });
    } else {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

privateRoute.post("/terting", (req, res) => {
  const { image } = req.body;
  console.log(image)
});

export default privateRoute;
