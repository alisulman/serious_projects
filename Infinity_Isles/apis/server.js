// import packages...
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import authRouter from './routers/authRouter.js'
import dbConfig from './configs/dbConfig.js'
import productRouter from './routers/prodRouter.js'

// define packages...
const app = express()
dotenv.config()

// important  middlewares...
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// routes 
app.use("/api/auth", authRouter)
app.use("/api/products", productRouter)

// port 
const port = process.env.PORT || 5000

//here in first we call port and secondly we a callback function
app.listen(port, () => {
    console.log(`The express server is running on http://localhost:${port} `)
})

// mongodb connection
dbConfig()

// now we test