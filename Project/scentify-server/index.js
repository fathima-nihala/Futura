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

const URoute=require('./Router/UseRouter')

mongoose.connect(process.env.Scentify_key).then(()=>{
    console.log('database connected');
}
)


app.use(express.json())
app.use('/data',URoute)

app.listen(7005,()=>{
    console.log('server is connected');
})

//xcLVr1Fqgp0SD50B
//fathimanihala200214
//mongodb+srv://fathimanihala200214:xcLVr1Fqgp0SD50B@cluster0.w2lpd4w.mongodb.net/?retryWrites=true&w=majority