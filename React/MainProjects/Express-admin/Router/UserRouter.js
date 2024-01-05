const router=require('express').Router()
const User=require('../Models/UserSchema')
const Jwt=require('jsonwebtoken')
const Crypto=require('crypto-js')

router.post('/adminpost',async(req,res)=>{
    const newUser=new User({
        firstname:req.body.firstname,
        email:req.body.email,
        password:Crypto.AES.encrypt(req.body.password,process.env.Crypto_js).toString()
    })
    try {
        const savedUser=newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/adminlogin',async (req,res)=>{
    console.log('admin login',req.body);
    try {
        const DataBasedata=await User.findOne({email:req.body.email})
        !DataBasedata && res.status(401).json({response:'please check your Email'})

        const hashedPassword=Crypto.AES.decrypt(DataBasedata.password,process.env.Crypto_js)
        console.log('hashed password is',hashedPassword);

        const originalPassword=hashedPassword.toString(Crypto.enc.Utf8)
        console.log('original password is',originalPassword);

        originalPassword !=req.body.password && res.status(401).json({response:'password and email doesnt match'})

        const accessToken=Jwt.sign({
            id:DataBasedata._id
        },process.env.Jwt_sec,{expiresIn:'5d'})

        const {password,...others}=DataBasedata._doc
        res.status(200).json({...others,accessToken})
    } catch (error) {
        res.status(400)
    }
})



module.exports=router