import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    id: Number,
    name: String,
    description: String, 
    price: Number,
    quantity: Number
})

export default mongoose.model('products', productSchema)