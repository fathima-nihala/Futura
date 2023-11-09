const router=require('express').Router()  //router page aakaan vendeett .create a variable and import express

const AAbatch=require('../Models/Userschema')  //imported AAbatchj from Userschema

router.post('/postmethod',async(req,res)=>{//front-end n data backend lek veran vendi. postmethod is like api name & its user-defined
console.log("postman data ?",req.body); //The req.body contains the data sent in the POST request by a client
const newUser=new AAbatch({
    firstname:req.body.firstname,
    secondname:req.body.secondname,
    age:req.body.age,
    address:req.body.address,
    email:req.body.email,
    password:req.body.password
}) // a new instance of the "AAbatch" Mongoose model is created, and it's initialized with the data from the request body.
try{
const saveduser=await newUser.save() //saveduser must be used;This line saves the new user document to the database. 
res.status(200).json(saveduser) //success code
}catch(err){
res.status(500).json(err)  //error code
}
})

router.get('/getmethod/:id',async (req,res)=>{
    try{
        const datas=await AAbatch.findById(req.params.id)
        console.log('datas');
        res.status(200).json(datas)
    }catch(err){
        res.status(500).json(err)
    }
})
module.exports=router
//router page is used access database