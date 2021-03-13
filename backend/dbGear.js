import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    id: String,
    name: String,
    description: String, 
    price: Number,
    quantity: Number,
    addedSize: String
})

export default mongoose.model('gear', productSchema)