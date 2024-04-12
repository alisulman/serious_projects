import decodeToken from "../helpers/decodeToken.js"


const privateMiddleware = async (req, res, next) => {
    try {
        let token = req.headers.authenticate
        const verification = decodeToken(token)
        req.user = verification.id
        next()
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error please try again"
        })
    }
}

export default privateMiddleware