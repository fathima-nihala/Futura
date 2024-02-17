const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
app.use(cors())
dotenv.config()

//Application level middle ware
// app.use(function(req,res,next){
//     console.log("all time first check");
//     next()
// })

const useRoute = require('./Router/UseRouter')


mongoose.connect(process.env.project_key).then(() => {
    console.log('DB connected');
})

app.use(express.json())
app.use('/test', useRoute)

app.listen(7002, () => {
    console.log('test server connected');
})



