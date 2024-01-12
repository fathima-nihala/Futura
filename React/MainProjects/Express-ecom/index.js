const express=require('express')
const app=express() //used to define routes and congfigure the server
const dotenv=require('dotenv')
const cors=require('cors')
const mongoose=require('mongoose')
app.use(cors())
dotenv.config()


//application level
app.use(function(req,res,next){
console.log("first check");
next()
})


mongoose.connect(process.env.Ecom_key).then(()=>{
    console.log("DB Connected");
})

const useRout=require('./Router/userRouter')

app.use(express.json())
app.use('/api',useRout)
app.listen(7003,()=>{
    console.log("server is connected");
})