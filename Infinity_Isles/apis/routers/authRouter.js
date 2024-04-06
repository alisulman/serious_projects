import express from 'express'
import * as auth from '../controllers/authContoller.js';
const authRouter = express.Router()

authRouter.post("/signup", auth.signup)
authRouter.post("/signin", auth.signin)

export default authRouter;