const express = require('express')
const app = express()  //used to define routes and configure the server.
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
app.use(cors())
dotenv.config()

mongoose.connect(process.env.project_key).then(() => {
    console.log('database is conneted');
}).catch((err) => {
    console.log(err.message);
})

const UseRo = require('./Router/UseRouter')
const recipe = require('./Router/RecipeRouter')
app.use(express.json())
app.use('/reg', UseRo)
app.use('/bt', recipe)

app.listen(7002, () => {
    console.log('server is connected');
})





