const router=require('express').Router()
const multer = require('multer')
const productdetails=require('../Models/Productschema')
const { route } = require('./UserRouter')

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
                stock:req.body.stock,     
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


//getproduct
router.get('/viewproduct',async(req,res)=>{
    console.log('reqqqqqq',req.body);
    try {
        const products=await productdetails.find()
        console.log(products);
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
        
    }
})

//get product by id
router.get('/viewproductTwo/:id', async (req, res) => {
    console.log('trtr',req.body);
    console.log('yyy',req.params.id);
    // const productId = req.params.id;
    try {
        const product = await productdetails.findById(req.params.id)
        console.log('ppp',product);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
});



//to delete product
router.delete('/removeproduct/:id',async(req,res)=>{
    try {
        const res=await productdetails.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.status(500).json(error)
    }
})

//to update product
router.put(`/updateproduct/:id`, async (req, res) => {
    console.log('req',req);
    console.log('***',req.body);
    console.log('req!!',req.params.id);
    try {
        const updatedProduct = await productdetails.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedProduct);
        console.log('updatedProduct',updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
module.exports=router