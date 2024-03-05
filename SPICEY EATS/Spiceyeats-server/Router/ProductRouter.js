const router = require('express').Router()
const multer = require('multer')
const products = require('../Modal/ProductSchema')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../spiceyeats-client/public/Images');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage})

router.post('/postprod',upload.single('image'),async(req,res)=>{
    console.log('***reqbody',req.body);
    console.log('%%%reqfile'.req.file);
    console.log('###reqorgnl',req.file.originalname);

    const newProducts = new products({
        category:req.body.category,
        type:req.body.type,
        title:req.body.title,
        description:req.body.description,
        image:req.file.originalname,
        price:req.body.price
    })
    console.log('newproduct',newProducts);

    try {
        const SavedProducts = await newProducts.save()
        console.log('saved....',SavedProducts);
        res.status(200).json(SavedProducts)

    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router