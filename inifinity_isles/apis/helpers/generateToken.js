import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

const secret_key = process.env.JWT_SECERET
const time = process.env.EXPIRE_IN

const getToken = (user) => {
    const token = jwt.sign({id: user._id}, secret_key, { expiresIn: time })
    return token
}

export default getToken;