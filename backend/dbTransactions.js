import mongoose from 'mongoose'

const transactionSchema = mongoose.Schema({
    id: String,
    amount: Number,
    items: [{
        description: String,
        id: String,
        image: String,
        price: Number,
        quantity: Number,
        title: String
    }]
})

export default mongoose.model('transactions', transactionSchema)