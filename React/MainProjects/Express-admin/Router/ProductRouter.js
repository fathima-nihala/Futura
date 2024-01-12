const router=require('express').Router()
const multer = require('multer')
const productdetails=require('../Models/Productschema')

//to upload photos "../"
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'../admin-e-com/public/Images')
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    } 
})
const upload = multer({storage:storage})

//  ***** add product *****

router.post('/addproduct',upload.single('image'),(req,res)=>{
    console.log("postman data ?",req.body); //The req.body contains the data sent in the POST request by a client
    console.log('check-check',req.file);
    console.log("***",req.originalname);

    const newproduct=new productdetails({

                category:req.body.category,
                type:req.body.type,
                title:req.body.title,
                description:req.body.description,
                mrp:req.body.mrp,
                price:req.body.price,
                image:req.file.originalname,
    })

    console.log('newproduct',newproduct);

    try{
        const saveproduct=newproduct.save()
        res.status(200).json(saveproduct)
    }
    catch(err){
        console.log();
        res.status(500).json(err)
    }
})

module.exports=router