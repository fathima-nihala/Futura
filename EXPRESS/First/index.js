// mongodb+srv://fathimanihala200214:<password>@cluster0.dndrxqw.mongodb.net/?retryWrites=true&w=majority
const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()

mongoose.connect(process.env.secret_key).then(()=>{
    console.log('Database Connected');
})

app.listen(3000,()=> {
    console.log('server is connected');
})

