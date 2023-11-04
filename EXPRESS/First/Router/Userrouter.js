const router=require('express').Router()  //router page aakaan vendeett

const AAbatch=require('../Models/Userschema')

router.post('/postmethod',async(req,res)=>{//front-end n data backend lek veran vendi.
console.log("postman data ?",req.body);
const newUser=new AAbatch(req.body)
try{
const saveduser=await newUser.save()
res.status(200).json(saveduser)
}catch(err){
res.status(500).json(err)
}
})
module.exports=router


//roter page is used access database