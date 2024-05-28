import mongoose from 'mongoose'

const recModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    RecieptImageUrl : {
        type: String,
        required: true
    }
})

const Reciept = mongoose.model('reciepts', recModel)

export default Reciept