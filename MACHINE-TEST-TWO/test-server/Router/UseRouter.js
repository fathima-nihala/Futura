const router = require('express').Router()
const MtestTwo = require('../Modal/UserSchema')
const JWT = require('jsonwebtoken')
const crypto = require('crypto-js')


router.post('/testpost', async (req, res) => {
    // console.log('test signup', req);
    console.log('ererre', req.body);

    const newUser = new MtestTwo({
        email: req.body.email,
        firstname: req.body.firstname,
        password: crypto.AES.encrypt(req.body.password, process.env.Crypto_js).toString()
    });
    console.log('newuser', newUser);

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.post('/testlogin', async (req, res) => {
    console.log('test login', req.body);
    try {
        const DBdata = await MtestTwo.findOne({ email: req.body.email })
        !DBdata && res.status(401).json({ response: 'please check your Email' })
        console.log('DBdata', DBdata);

        const hashedPassword = crypto.AES.decrypt(DBdata.password, process.env.Crypto_js)
        console.log('hashed password is', hashedPassword);

        const originalPassword = hashedPassword.toString(crypto.enc.Crypto_js)
        console.log('Original password is', originalPassword);
        originalPassword != req.body.password && res.status(400).json({ response: 'password and email doesnt match' })


        const accessToken = JWT.sign({
            id: DBdata._id
        }, process.env.Jwt_sec,
            { expiresIn: '5d' })

        console.log('aaccessss', accessToken);
        const { password, ...others } = DBdata._doc
        res.status(200).json({ ...others, accessToken })

    } catch (error) {
        res.status(400)
    }
})

module.exports = router