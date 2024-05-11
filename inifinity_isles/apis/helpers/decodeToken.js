import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const secret_key = process.env.JWT_SECERET

const decodeToken = (token) => {
    const crackToken = jwt.verify(token, secret_key)
    return crackToken
}

export default decodeToken;