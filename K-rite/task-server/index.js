const express = require('express')
const app = express()  //used to define routes and configure the server.
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
dotenv.config()

const Route = require('./Router/UseRouter')

mongoose.connect(process.env.project_key).then(() => {
    console.log('dataBase Connected');
}).catch((err) => {
    console.log(err.message);
})


app.use(express.json())
app.use('/task',Route)

app.listen(7008, () => {
    console.log('server is connected');
})
