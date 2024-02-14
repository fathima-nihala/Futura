const router=require('express').Router()
const Ecom=require('../Models/userEcomSchema')
const Jwt=require('jsonwebtoken')
const crypto=require('crypto-js')
const multer = require('multer')
const {verifyToken,verifyTokenAndauthorization} = require('../verifyTokn')
const cartData = require('../Models/CartSchema')


//to upload photos "../"
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        // cb(null,'../e-coms/public/Images');
        cb(null,'../admin-e-com/public/Profile');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage})

//user-register
router.post('/ecompost',upload.single('image'),(req,res)=>{
    console.log('@#@#-userdata', req.body);
    console.log('usercheck', req.file); // Corrected line
    console.log('%%', req.file.originalname);

    const newEcomUser = new Ecom({
        firstname:req.body.firstname,
        email:req.body.email,
        image:req.file.originalname,
        password:crypto.AES.encrypt(req.body.password,process.env.Crypto_js).toString()
    })
    console.log('newEcomUser',newEcomUser);

    try {
        const  savedUserEcom =  newEcomUser.save()
        console.log('saveduser',savedUserEcom);
        res.status(200).json(savedUserEcom)
    } catch (error) {
        res.status(500).json(error)
    }
})

//user-login
router.post('/ecomlogin',async(req,res)=>{
    console.log('user logi',req.body);
    try {
        const DBdata=await Ecom.findOne({email:req.body.email})
        !DBdata && res.status(400).json({Response:'please check your email'})
        console.log("ecom b-end",DBdata);

        const hashedPassword=crypto.AES.decrypt(DBdata.password,process.env.Crypto_js)
        console.log('hashed password',hashedPassword);

        const originalPassword=hashedPassword.toString(crypto.enc.Utf8)
        console.log('original pass',originalPassword);
        originalPassword !=req.body.password && res.status(401).json({Response:"password & email doesn't match"})

        const accessToken= Jwt.sign({
            id:DBdata._id
        },process.env.Jwt_sec,{expiresIn:'5d'})
        console.log('****',accessToken);
        const{password,...others}=DBdata._doc
        res.status(200).json({...others,accessToken})

    } catch (error) {
        res.status(400).json(error)
    }
})



// //to get user details in admin user-page
router.get('/Ecomgetmethod',async (req,res)=>{
    try{
        const datas=await Ecom.find()
        console.log(datas);
        res.status(200).json(datas)
    }catch(err){
        res.status(500).json(err)
    }
})


// //to delete/remove Ecom-user from admin user-page
router.delete('/Ecomdelete/:id',async(req,res)=>{
    // console.log('kfl',req.body);
    try {
       const res=await Ecom.findByIdAndDelete(req.params.id)
    //    console.log('res',res.body);
    } catch (error) {
        res.status(500).json(err)
    }
})




module.exports=router