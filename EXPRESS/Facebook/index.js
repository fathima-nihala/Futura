const express=require('express')
const app=express()
const dotenv=require('dotenv')   // imports the dotenv module,used for loading environment variables from a .env file into the Node.js environment.
const mongoose=require('mongoose')
const cors=require('cors')
app.use(cors())
dotenv.config()

//application level middlewareni
// app.use(function(req,res,next){
//     console.log("all time facebook check");
//     next()
// })

const fbuserroute=require('./Router/FbUserrouter')

//create database
mongoose.connect(process.env.Facebook_key).then(()=>{
    console.log("Fb Databaseconnecte");
})

app.use(express.json())
app.use('/api',fbuserroute)

app.listen(7001,()=>{
    console.log('Fb server is connected');
})

//http://localhost:7001/api