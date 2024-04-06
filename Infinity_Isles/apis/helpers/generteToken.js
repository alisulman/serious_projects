import jwt from 'jsonwebtoken'

const GenerateToken = (user) => {
    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
    return token;
}

export default GenerateToken;