const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
dotenv.config()

//7736788591

const useroute = require('./Router/UseRouter')

mongoose.connect(process.env.project_key).then(() => {
    console.log('dataBase Connected');
})

app.use(express.json())
app.use('/work',useroute)

app.listen(7009, () => {
    console.log('server is connected');
})