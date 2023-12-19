const router=require('express').Router()  //router page aakaan vendeett .create a variable and import express
const Crypto=require('crypto-js')
const AAbatch=require('../Models/Userschema')  //imported AAbatch from Userschema
const Jwt=require('jsonwebtoken')
const { verifyToken, verifyTokenAndauthorization } = require('../verifyToken')
const multer=require('multer')



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../../React/class-works/public/Images')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })



router.post('/postmethod',upload.single('image'),(req,res)=>{//front-end n data backend lek veran vendi. postmethod is like api name & its user-defined
console.log("postman data ?",req.body); //The req.body contains the data sent in the POST request by a client
console.log('check-check',req.file);
// const newUser = new AAbatch(req.body)
//req.body.password=Crypto.AES.encrypt(req.body.password,process.env.Crypto_js).toString()
const newUser=new AAbatch({
    firstname:req.body.firstname,
    secondname:req.body.secondname,
    name:req.body.name,
    age:req.body.age,
    address:req.body.address,
    email:req.body.email,
    phone:req.body.phone,
    image:req.file.originalname,
    password:Crypto.AES.encrypt(req.body.password,process.env.Crypto_js).toString()
}) // a new instance of the "AAbatch" Mongoose model is created, and it's initialized with the data from the request body.
try{
const saveduser=newUser.save() //saveduser must be used;This line saves the new user document to the database. 
res.status(200).json(saveduser) //success code
}catch(err){
res.status(500).json(err)  //error code
}
})


router.get('/getmethod',async (req,res)=>{
    try{
        const datas=await AAbatch.find()
        console.log(datas);
        res.status(200).json(datas)
    }catch(err){
        res.status(500).json(err)
    }
})


router.get('/getidmethod/:id',async (req,res)=>{
    try{
        const datas=await AAbatch.findById(req.params.id)
        console.log(datas);
        res.status(200).json(datas)
    }catch(err){
        res.status(500).json(err)
    }
})




router.put('/updatedata/:id',async (req,res)=>{
    try{ 
        const resData=await AAbatch.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(resData)
    }catch(err){
        res.status(500).json(err)
    }
})


//Login
router.post('/login',async(req,res)=>{
    console.log('Backend login',req.body);
    try{
        const DBdata=await AAbatch.findOne({email:req.body.email})
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

        const {password,...others}=DBdata._doc 
        // var Id=DBdata._id 
        res.status(200).json({...others,accessToken})
    }catch(err){
        res.status(400)
    }
})


router.get("/getdataok/:id",verifyToken,verifyTokenAndauthorization,async(req,res)=>{
    console.log("okokoko");
    try {
        const res1=await AAbatch.findById(req.params.id)
        console.log("okok",res1);
        res.status(200).json(res1)
    } catch (error) {
        res.status(500).json(error)
    }
})
 
// method to use backend verification //test
router.put(`/updatework/:id`,async(req,res)=>{
    console.log('req',req);
    console.log('8888',req.params.id);
    console.log('***',req.body);
    try {
        const updatework=await AAbatch.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true})
        res.status(200).json(updatework)
        console.log('update work',updatework);
    } catch (err) {
        res.status(500).json(err)
    }
})


router.post('/signup',verifyToken,verifyTokenAndauthorization,async(req,res,next)=>{
    console.log("cliendside inf",req.body);
    const newData=new futura(req.body)
    try {
        const savedData=await newData.save()
        res.status(200).json(savedData)
    } catch (error) {
        console.log(error);
    }
    next()
},(req,res)=>{
    console.log("last check",req.body);
})






module.exports=router
//router page is used access database

