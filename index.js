const express = require('express')
const mongoose = require('mongoose')

const productRoute = require('./routes/product.route.js')

const app = express()

// We need to use some middleware so that we can send json data in the body
app.use(express.json());

// We can also have middleware to accept form url encoded data
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products', productRoute)


app.get('/', (req, res) => {
    res.send("Hello from Node API")
});


mongoose.connect("mongodb+srv://sidvsai:kR4pym2K22lxCs5n@backend.cdnrmhz.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Backend")
.then(() => {
    console.log("Connected to database!")
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
})
.catch(() => {
    console.log("Connection failed")
});