import express from 'express' ; 
import mongoose from 'mongoose' ; 
import Cors from 'cors' ; 
import Products from './dbProducts.js'
import Camps from './dbCamps.js'
import Gear from './dbGear.js'


// App config
const app = express() ; 
const port = process.env.PORT || 8001 ; 
const connection_url = `mongodb+srv://admin:debutStance738@cluster0.t9hwl.mongodb.net/4am-basketball?retryWrites=true&w=majority`

// Middlewares
app.use(express.json()) ; 
app.use(Cors()) ; 

// DB config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }).then(res=>{
          console.log("DB Connected!")
  }).catch(err => {
    console.log(Error, err.message);
  })

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Yooo')) ; 

// Donate Products
app.post('/products', (req, res) => {
    const dbProduct = req.body ; 

    Products.create(dbProduct, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    }) ; 
});

app.get('/products', (req, res) => {
    Products.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    }) ; 
});

// Registration
app.post('/registration', (req, res) => {
    const dbProduct = req.body ; 

    Camps.create(dbProduct, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    }) ; 
});

app.get('/registration', (req, res) => {
    Camps.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    }) ; 
});


// Gear Products
app.post('/gear', (req, res) => {
    const gearProduct = req.body ; 

    Gear.create(gearProduct, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    }) ; 
});

app.get('/gear', (req, res) => {
    Gear.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    }) ; 
});

// Listener 
app.listen(port, () => console.log(`listening on localhost: ${port}`)) ;