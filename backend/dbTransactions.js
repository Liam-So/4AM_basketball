import mongoose from 'mongoose'

const transactionSchema = mongoose.Schema({
    id: Number,
    amount: Number,
    items: [{
        unit_amount: String,
        id: String,
        itemQuantity: Number
    }]
})

export default mongoose.model('transactions', transactionSchema)