import { validate } from "email-validator"
import User from "../models/authModel.js"
import EncryptPassword from "../helpers/encrptpassword.js"
import ComparePassword from "../helpers/dcryptpassword.js"
import GenerateToken from "../helpers/generteToken.js"

// sign up
export const signup = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const userExists = await User.findOne({ email })
        if (userExists) {
            res.status(403).json({
                success: false,
                message: "email or password is incorrect"
            })
        } else {
            if (!validate(email)) {
                res.status(403).json({
                    success: false,
                    message: "email is not correct!"
                })
            }
            if (!password && !email) {
                res.status(404).json({
                    success: false,
                    error: error.message,
                    message: "password & email is required!"
                })
            } else {
                const securePassword = await EncryptPassword(password)
                const newUser = await User.create({ username, email, password: securePassword })
                const token = GenerateToken(newUser)
                res.status(201).json({
                    success: true,
                    message: "Registoration is successfully",
                    data: newUser,
                    token: token
                })
            }
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
                message: "email or password is incorrect"
            })
        } else {
            if (!password && !email) {
                res.status(404).json({
                    success: false,
                    message: "password & email is required!"
                })
            } else {
                const securePassword = await ComparePassword(password, user.password)
                const token = GenerateToken(user)
                if (securePassword && user) {
                    res.status(200).json({
                        success: true,
                        message: `Welcome ${user.username}`,
                        data: user,
                        token: token
                    })
                } else {
                    res.status(404).json({
                        success: false,
                        message: "password & email is incorrect"
                    })
                }
            }
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            mesage: "Internal server problem, please try again"
        })
    }
}


