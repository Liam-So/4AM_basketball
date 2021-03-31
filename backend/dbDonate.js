import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    id: String,
    type: String,
    name: String,
    description: String, 
    price: Number,
    quantity: Number,
    size: String,
    sku: String,
    img: String
})

export default mongoose.model('donations', productSchema)