const router = require('express').Router()
const multer = require('multer')
const Btrack = require('../Modal/RecipeUser')

// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, '../../React/Btrack/btrackclient/Images')
//     },
//     filename: function(req, file, cb){
//         cb(null,file.originalname)
//       }
// })

// const upload = multer({ storage: storage })

router.post('/post', async (req, res) => {
    const newData = new Btrack({
        title: req.body.title,
        ingredients: req.body.ingredients,
        preparationinstruction: req.body.preparationinstruction,
        time: req.body.time,
        servings: req.body.servings,
        dietarylabels: req.body.dietarylabels,
        // image:req.file.originalname,
    })
    console.log('newData', newData);
    try {
        const saveData = await newData.save();
        res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json(error);
    }
})


router.get('/get', async(req,res)=>{
    console.log('reqqqqqqqqqqq',req.params.id);
    console.log('bodyyyy',req.body);
    try {
        const  dbdatas = await Btrack.findById(req.params.id)
        console.log('ddddd',dbdatas);
        res.status(200).json(dbdatas)
    } catch (error) {
        res.status(400).json(error)
    }
})


router.put('/edit',async(req,res)=>{
    console.log('reqqqqqqqqqqq',req.params.id);
    console.log('bodyyyy',req.body);

    try {
        const dbdata = await Btrack.findByIdAndUpdate(req.params.id, req.body,{new:true})
    } catch (error) {
        res.status(400).json(error)
        
    }
})

module.exports = router
