import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const MONGODB = process.env.MONGODB_LOCAL

const dbConfig = () => {
    mongoose
    .connect(MONGODB)
    .then(conn => console.log(`Successfully connect with ${conn.connection.host}`))
    .catch(err => console.log(`Something went wrong due to ${err.message}`))
}

export default dbConfig