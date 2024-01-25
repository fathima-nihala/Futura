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

mongoose.connect(process.env.project_key).then(()=>{
    console.log('DataBase Connected');
})

const useRoute = require('./Router/UseRouter')



app.use(express.json());
app.use('/api',useRoute)

app.listen(7006,()=>{
    console.log('server is connected');
})