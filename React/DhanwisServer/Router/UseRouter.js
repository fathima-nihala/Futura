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
    console.log('req in getadmin', req.params.id);
    try {
        const getres = await dhanwis.findById(req.params.id)
        console.log("ressvalue", getres);
        res.status(200).json(getres)
    } catch (err) {
        res.status(500).json(err)
    }
})




module.exports = router