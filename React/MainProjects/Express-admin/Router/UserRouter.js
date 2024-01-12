const router=require('express').Router()
const User=require('../Models/UserSchema')
const Jwt=require('jsonwebtoken')
const Crypto=require('crypto-js')
const {verifyToken,verifyTokenAndauthorization} = require('../verifyTokn')
// const multer=require('multer')

router.post('/adminpost',async(req,res)=>{
    const newUser=new User({
        email:req.body.email,
        firstname:req.body.firstname,
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

try{
    const DBdata=await User.findOne({email:req.body.email})
    !DBdata && res.status(401).json({response:'please check your Email'})

    console.log('Backend Data',DBdata);

    const hashedPassword=Crypto.AES.decrypt(DBdata.password,process.env.Crypto_js)
    console.log('hashed password is',hashedPassword);
    
    const originalPassword=hashedPassword.toString(Crypto.enc.Utf8)
    console.log('Original password is',originalPassword);
    originalPassword !=req.body.password && res.status(401).json({response:"password and email doesnt match"})

    const accessToken = Jwt.sign({
        id:DBdata._id 
    },process.env.Jwt_sec,
    {expiresIn:'5d'})

    console.log("****",accessToken);
    const {password,...others}=DBdata._doc 
    // var Id=DBdata._id 
    res.status(200).json({...others,accessToken})
}catch(err){
    res.status(400)
}
})

module.exports=router