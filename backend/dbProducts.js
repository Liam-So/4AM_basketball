import mongoose from 'mongoose'

const productSchema = mongoose.Schema({
    name: String,
    imgUrl: String,
})

export default mongoose.model('products', productSchema)