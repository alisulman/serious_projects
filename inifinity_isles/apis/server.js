import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import authRouter from './routers/authRouter.js'
import privateRoute from './routers/testPrivateRoute.js'
import dbConfig from './config/dbConfig.js'
import prodRoute from './routers/prodRoute.js'

const app = express()
dotenv.config()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

app.use('/api', authRouter)
app.use('/api', privateRoute)
app.use('/api', prodRoute)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`The Express server is running on port http://localhost:${port}`)
})

dbConfig()