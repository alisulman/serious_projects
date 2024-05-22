import express from 'express'
import { PaymentGateway } from '../controllers/paymentGatway.js'

const payRoute = express.Router()

payRoute.post('/checkout-payment', PaymentGateway)

export default payRoute