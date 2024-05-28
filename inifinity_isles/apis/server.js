import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import authRouter from "./routers/authRouter.js";
import privateRoute from "./routers/testPrivateRoute.js";
import dbConfig from "./config/dbConfig.js";
import prodRoute from "./routers/prodRoute.js";
import cartRoute from "./routers/cartRoute.js";
import catRoute from "./routers/catRouter.js";
import favRouter from "./routers/favRouter.js";
import payRoute from "./routers/paymentRouter.js";
import ReceiptRoute from "./routers/recieptRouter.js";
import cron from "node-cron";
import Product from "./models/productModel.js";
import Favourite from "./models/favModel.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api", authRouter);
app.use("/api", privateRoute);
app.use("/api", prodRoute);
app.use("/api", cartRoute);
app.use("/api", catRoute);
app.use("/api", favRouter);
app.use("/api", payRoute);
app.use("/api", ReceiptRoute);

cron.schedule("* * * * * *", async () => {
  try {
    // Retrieve products with zero stock
    const zeroStockProducts = await Product.find({ stock: 0 });

    // Delete zero stock products from the database
    await Product.deleteMany({
      _id: { $in: zeroStockProducts.map((p) => p._id) },
    });
    for (const product of zeroStockProducts) {
        await Favourite.findOneAndDelete({ product: product._id });
      }
  } catch (error) {
    console.error("Error deleting zero stock products:", error);
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The Express server is running on port http://localhost:${port}`);
});

dbConfig();
