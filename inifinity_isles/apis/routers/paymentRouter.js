import express from 'express'
import { PaymentGateway } from '../controllers/paymentGatway.js'
import EmailSender from '../utils/sendEmail.js'

const payRoute = express.Router()

payRoute.post('/checkout-payment', PaymentGateway)

payRoute.get('/send-email', EmailSender)

export default payRoute