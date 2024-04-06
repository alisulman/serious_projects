import mongoose from 'mongoose'

const dbConfig = () => {
    mongoose
    .connect(process.env.MONGODB_LOCAL)
    .then(conn => console.log(`Successfully connected with ${conn.connection.host}`))
    .catch(err => console.log(`Something went wrong due to ${err.message}`))
}

export default dbConfig