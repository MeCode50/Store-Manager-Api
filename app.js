require('dotenv').config()


const express = require('express');
const app = express(); 

const notFound = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

//express json middleware
app.use(express.json())

// routees 
app.get('/',(req, res)=>{
    res.send('<h1>Store Api</h1><a href="/api/v1/products"')
})