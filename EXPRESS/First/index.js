const express=require('express')
const app=express()
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()
const userRoute=require('./Router/Userrouter')

mongoose.connect(process.env.secret_key).then(()=>{
    console.log('Database Connected');
});

app.use(express.json())
app.use('/api/data',userRoute)

app.listen(3000,()=> {
    console.log('server is connected');
})

