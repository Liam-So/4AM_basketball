import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    id: String,
    globalId: String,
    type: String,
    name: String,
    description: String, 
    price: Number,
    quantity: Number,
    size: String,
    sku: Number,
    img: String
})

export default mongoose.model('gear', productSchema)