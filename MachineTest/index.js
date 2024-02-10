const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors())
dotenv.config()

const useRoute = require('./Router/Userouter')

mongoose.connect(process.env.secret_key).then(() => {
    console.log('Database Connected');
})

app.use(express.json())
app.use('/datas', useRoute)

app.listen(5000, () => {
    console.log('server is connected');
})