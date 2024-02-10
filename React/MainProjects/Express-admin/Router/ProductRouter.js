const router = require('express').Router()
const multer = require('multer')
const productdetails = require('../Models/Productschema')
const { route } = require('./UserRouter')

//to upload photos "../"
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../admin-e-com/public/Images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })

//  ***** add product *****

router.post('/addproduct', upload.single('image'), (req, res) => {
    console.log("postman data ?", req.body); //The req.body contains the data sent in the POST request by a client
    console.log('check-check', req.file);
    console.log("***", req.originalname);

    const newproduct = new productdetails({

        category: req.body.category,
        type: req.body.type,
        title: req.body.title,
        description: req.body.description,
        mrp: req.body.mrp,
        price: req.body.price,
        stock: req.body.stock,
        image: req.file.originalname,
    })

    console.log('newproduct', newproduct);

    try {
        const saveproduct = newproduct.save()
        res.status(200).json(saveproduct)
    }
    catch (err) {
        console.log();
        res.status(500).json(err)
    }
})


//getproduct
router.get('/viewproduct', async (req, res) => {
    console.log('reqqqqqq', req.body);
    try {
        const products = await productdetails.find()
        console.log(products);
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)

    }
})

//get product by id
router.get('/viewproductTwo/:id', async (req, res) => {
    console.log('uuuu', req.params.id); // Check if the ID is correctly extracted from the URL
    try {
        const product = await productdetails.findById(req.params.id);
        console.log('ppp', product); // Check if the product is found
        res.status(200).json(product);
    } catch (error) {
        console.error('Error finding product:', error); // Log any errors that occur
        res.status(500).json(error);
    }
});





//to delete product
router.delete('/removeproduct/:id', async (req, res) => {
    try {
        const res = await productdetails.findByIdAndDelete(req.params.id)
    } catch (error) {
        res.status(500).json(error)
    }
})

//to update product
router.put(`/updateproduct/:id`, async (req, res) => {
    // console.log('req', req);
    // console.log('***', req.body);
    console.log('req!!', req.params.id);
    console.log("data", req.body);
    try {
        console.log("hello", req.body);
        const DBdata = await productdetails.findByIdAndUpdate(req.params.id, {
            $set: {
                category: req.body.category,
                type: req.body.type,
                title: req.body.title,
                description: req.body.description,
                mrp: req.body.mrp,
                stock: req.body.stock,
                price: req.body.price,
                image: req.file.originalname,
            }
        })
        console.log("haiii", DBdata);
        res.status(200).json(DBdata)
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// router.get('/getItemDetails/:id',async(req,res) => {
//     console.log('req in items',req.body);
//     console.log('req.params.id',req.params.id);
//     try {
//         const getItemres = await productdetails.findById(req.params.id)
//         console.log("dtataaaa", getItemres);
//         res.status(200).json(getItemres)
//     } catch (err) {
//         res.status(500).json(err)
//     }
// });


router.get('/geItemss/:id', async (req, res) => {
    console.log('req', req.body);
    console.log('iddddddd',req.params.id);
    try {
        const getitemssss = await productdetails.findById(req.params.id)
        console.log('dataaatatta', getitemssss);
        res.status(200).json(getitemssss)
    } catch (err) {
        console.log(err);
    }
})
module.exports = router