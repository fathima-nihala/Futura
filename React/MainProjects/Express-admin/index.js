const express=require('express')
const app=express()  //used to define routes and configure the server.
const dotenv=require('dotenv') 
const mongoose=require('mongoose')
const cors=require('cors')
app.use(cors())
dotenv.config()

//Application level middle ware
app.use(function(req,res,next){
    console.log("all time first check");
    next()
})

const UseRoute=require('./Router/UserRouter')

mongoose.connect(process.env.project_key).then(()=>{
    console.log('dataBase Connected');
})
app.use(express.json())
app.use('/api',UseRoute)
app.listen(7002,()=>{
    console.log('server is connected');
})
