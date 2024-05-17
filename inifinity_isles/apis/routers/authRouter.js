import express from 'express'
import * as auth from '../controllers/authController.js'
const authRouter = express.Router()

authRouter.post('/auth/signup', auth.signup)
authRouter.post('/auth/signin', auth.signin)
authRouter.put('/auth/updateRole/:id/role/:role', auth.updateRole)
authRouter.get('/auth/get-vendor', auth.fetchVendor)

export default authRouter   