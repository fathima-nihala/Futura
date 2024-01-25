// const router=require('express').Router()
// const Ecom=require('../Model/userSchema')
// const Jwt=require('jsonwebtoken')
// const crypto=require('crypto-js')
// const {verifyToken,verifyTokenAndauthorization} = require('../verifyToken')

//user-register
// router.post('/ecompost',async(req,res)=>{
//     console.log('req',req.body);
//     const newEcomUser=Ecom({
//         firstname:req.body.firstname,
//         email:req.body.email,
//         password:crypto.AES.encrypt(req.body.password,process.env.Crypto_js).toString()
//     })
//     console.log('newecom user',newEcomUser);
//     try {
//         const  savedUser= await newEcomUser.save()
//         console.log('saveduser',savedUser);
//         res.status(200).json(savedUser)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })

//user-login
// router.post('/ecomlogin',async(req,res)=>{
//     console.log('user logi',req.body);
//     try {
//         const DBdata=await Ecom.findOne({email:req.body.email})
//         !DBdata && res.status(400).json({Response:'please check your email'})
//         console.log("ecom b-end",DBdata);

//         const hashedPassword=crypto.AES.decrypt(DBdata.password,process.env.Crypto_js)
//         console.log('hashed password',hashedPassword);

//         const originalPassword=hashedPassword.toString(crypto.enc.Utf8)
//         console.log('original pass',originalPassword);
//         originalPassword !=req.body.password && res.status(401).json({Response:"password & email doesn't match"})

//         const accessToken= Jwt.sign({
//             id:DBdata._id
//         },process.env.Jwt_sec,{expiresIn:'5d'})
//         console.log('****',accessToken);
//         const{password,...others}=DBdata._doc
//         res.status(200).json({...others,accessToken})

//     } catch (error) {
//         res.status(400).json(error)
//     }
// })


//to get user details in admin user-page
// router.get('/Ecomgetmethod',async (req,res)=>{
//     try{
//         const datas=await Ecom.find()
//         console.log(datas);
//         res.status(200).json(datas)
//     }catch(err){
//         res.status(500).json(err)
//     }
// })

//to delete/remove Ecom-user from admin user-page

// router.delete('/Ecomdelete/:id',async(req,res)=>{
//     console.log('kfl',req);
//     try {
//        const res=await Ecom.findByIdAndDelete(req.params.id)
//        console.log('res',res);
//     } catch (error) {
//         res.status(500).json(err)
//     }
// })



// module.exports=router