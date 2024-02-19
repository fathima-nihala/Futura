const router = require('express').Router()
const buydata = require('../Models/BuySchema')

//to post datas when clicking buynow button
router.post('/buypost',async(req,res)=>{
    console.log('buydataa',req.body);
    try {
        const buyPost = await buydata({
            title: req.body.title,
            price: req.body.price,
            image: req.body.image,
            productid:req.body.loginId
        })
        console.log('buyydataaas',buyPost);

        const savedPosts = await buyPost.save()
        res.status(200).json(savedPosts)
        console.log('savedpostss',savedPosts);

    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports=router
