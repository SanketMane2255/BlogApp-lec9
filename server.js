const express = require('express')
const connect = require('./config/db')
const userRoute = require('./routes/user')
const blogRoute = require('./routes/blog')
const app = express()

require('dotenv').config()

connect()

app.use(express.json())
app.use('/api/user/',userRoute)
app.use('/api/blog/',blogRoute)

const port = process.env.port

app.listen(port , ()=>{
    console.log(`We are listening at ${port}`)
})