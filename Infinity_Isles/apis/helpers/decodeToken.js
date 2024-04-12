import jwt from 'jsonwebtoken'

const decodeToken = (token) => {
    const decryptToken = jwt.verify(token, process.env.JWT_SECRET)
    return decryptToken
}

export default decodeToken