const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require('cors')
const dotenv=require('dotenv')
const appRoute=require('./routes/Approuter')
const { log } = require('console')
dotenv.config()
app.use(cors())
mongoose.connect(process.env.Mongo_url).then((data)=>{
    console.log('data base are connected');
})

app.use(express.json())

app.use('/api',appRoute)

app.listen(5001,()=>{
    console.log("port 5001 is conected");
})