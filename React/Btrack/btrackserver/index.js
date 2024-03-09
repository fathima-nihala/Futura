const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
app.use(cors())
dotenv.config()

const route = require('./Router/UserRouter')

mongoose.connect(process.env.project_key).then(() => {
    console.log('database is conneted');
}).catch((err) => {
    console.log(err.message);
})

app.use(express.json())
app.use('/bt',route)

app.listen(7002, () => {
    console.log('server is connected');
})