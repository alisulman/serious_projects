import express from 'express'
import { getReceipt, savenUpdateReceipt } from '../controllers/receiptController.js'
import authMiddleware from '../middlewares/authMiddleware.js'
const ReceiptRoute = express.Router()

ReceiptRoute.post('/receiptSavenUPload', savenUpdateReceipt)
ReceiptRoute.post('/getImage', getReceipt)

export default ReceiptRoute