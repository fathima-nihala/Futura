const router=require('express').Router()
const FBbatch=require('../Models/FbUserschema')
const crypto=require('crypto-js')

router.post('/fbpost',async(req,res)=>{
    const newUser=new FBbatch({
        firstname:req.body.firstname,
        secondname:req.body.secondname,
        combinedinput:req.body.combinedinput,
        gender:req.body.gender,
        day:req.body.day,
        month:req.body.month,
        year:req.body.year,
        password:crypto.AES.encrypt(req.body.password,process.env.Crypto_js).toString()

    })
    try {
        const savedUser=newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})
//http://localhost:7001/api/fbpost

module.exports=router