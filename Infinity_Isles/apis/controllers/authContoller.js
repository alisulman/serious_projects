import { validate } from "email-validator"
import User from "../models/authModel.js"

// sign up
export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const userExists = await User.findOne({ email })
        if (userExists) {
            res.status(403).json({
                success: false,
                mesage: "email or password is incorrect"
            })
        } else {
            if (!validate(email)) {
                res.status(403).json({
                    success: false,
                    mesage: "email is not correct!"
                })
            }
            if (!password) {
                res.status(404).json({
                    success: false,
                    mesage: "password is required"
                })
            }
            const newUser = await User.create({ username, email, password })
            res.status(201).json({
                success: true,
                mesage: "Registoration is successfully",
                data: newUser
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            mesage: "Internal server problem, please try again"
        })
    }
}

//sign in
export const signin = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            res.status(404).json({
                success: false,
                mesage: "email or password is incorrect"
            })
        } else {
            res.status(200).json({
                success: true,
                mesage: `Welcome ${user.username}`,
                data: user
            })
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            mesage: "Internal server problem, please try again"
        })
    }
}


