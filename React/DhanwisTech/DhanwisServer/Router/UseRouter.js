const router = require('express').Router()
const dhanwis = require('../Modal/UserSchema')

router.post('/dhanwispost', async (req, res) => {

    const newUser = new dhanwis({
        email: req.body.email,
        name: req.body.name,
        phone: req.body.phone,
        password: req.body.password,
        gender: req.body.gender,
        confirmpassword: req.body.confirmpassword,
        male: req.body.male,
        female: req.body.female,
        other: req.body.other,
    });
    console.log("newuser", newUser);

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }

})


router.get('/dhanwisget/:id', async (req, res) => {
    console.log('uuuu', req.params.id); // Check if the ID is correctly extracted from the URL
    try {
        const dbData = await dhanwis.findById(req.params.id);
        console.log('idddddd', dbData);
        res.status(200).json(dbData)
    } catch (error) {
        res.status(400).json(error)
    }
});


router.put('/dhanwisedit/:id', async (req, res) => {
    console.log('iddddddddddddd', req.params.id);
    console.log('boooodyyyy',req.body);
    try {
        const dbData = await dhanwis.findByIdAndUpdate(req.params.id, req.body, { new: true });
        console.log('updateeeeee', dbData);
        res.status(200).json(dbData);
    } catch (error) {
        res.status(400).json(error);
    }
});


module.exports = router