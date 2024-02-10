const router = require('express').Router()
const Mtest = require('../Modal/UserSchema')

router.post('/methodpost', async (req, res) => {
    console.log("haiiiii", req.body.name);
    const newUser = new Mtest({
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
        phone: req.body.phone
    })
    try {
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/methodget', async (req, res) => {
    try {
        const data = await Mtest.find()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/methodupdate/:id', async (req, res) => {
    try {
        const update = await Mtest.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.status(200).json(update)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.delete('/methodelete/:id',async(req,res)=>{
    try {
        const Delete = await Mtest.findByIdAndDelete(req.params.id)
        res.status(200).json(Delete)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router