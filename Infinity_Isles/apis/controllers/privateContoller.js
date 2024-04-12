

export const privateRoute = async (req, res) => {
    try {       
        res.status(200).json({
            success: true,
            message: 'Welcome in private route'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error please try again"
        })
    }
}