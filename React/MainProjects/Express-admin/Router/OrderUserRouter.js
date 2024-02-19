const router = require('express').Router()
const orderuserdatas = require('../Models/OrderUserSchema')

//post order user data
router.post('/postOrderUserData', async (req, res) => {
    console.log('order-user-data', req.body);
    try {
        const User = await orderuserdatas({
            address: req.body.address,
            pincode: req.body.pincode,
            city: req.body.city,
            phone: req.body.phone,
            profileid: req.body.loginId
        })
        console.log('usr-ordr', User);

        const SavedData = await User.save()
        res.status(200).json(SavedData)
        console.log('order-SavedData', SavedData);
    } catch (error) {
        res.status(400).json(error)
    }
})

//get user order data
router.get('/getOrderUserData/:id', async (req, res) => {
    console.log('getuserid', req.params.id);
    try {
        const orderedUser = await orderuserdatas.find({ profileid: req.params.id })
        console.log('orderedUser', orderedUser);
        res.status(200).json(getuserorder)
    } catch (error) {
        res.status(400).json(error)
    }
})
module.exports = router