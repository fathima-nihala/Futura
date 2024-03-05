const router = require('express').Router()
const Jwt = require('jsonwebtoken')
const crypto = require('crypto-js')
const multer = require('multer')
const User = require('../Modal/UserSchema')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../spiceyeats-client/public/Profile');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const upload = multer({ storage: storage })


router.post('/userpost', upload.single('image'), async (req, res) => {
    console.log('user.body', req.body);
    console.log('user.file', req.file);
    console.log('orgnl', req.file.originalname);

    const newUser = new User({
        firstname: req.body.firstname,
        email: req.body.email,
        password: crypto.AES.encrypt(req.body.password, process.env.Crypto_js).toString(),
        image: req.file.originalname
    })
    console.log('newUser', newUser);

    try {
        const savedUser = await newUser.save()
        console.log('savedUser', savedUser);
        res.status(200).json(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.post('/userlogin', async (req, res) => {
    console.log('userlogin', req.body);
    try {
        const DBdata = await User.find({ email: req.body.email })
        !DBdata && res.status(400).json({ Response: 'please check your email' })
        console.log('************8DBdata', DBdata);

        const hashedPassword = crypto.AES.decrypt(DBdata[0].password, process.env.Crypto_js)
        console.log('hashedPassword is:', hashedPassword);

        const originalPassword = hashedPassword.toString(crypto.enc.Utf8)
        console.log('originalPassword',originalPassword);
        if (originalPassword !== req.body.password) {
            return res.status(401).json({ Response: "Password and email don't match" });
        }

        const accessToken = Jwt.sign({
            id: DBdata._id
        }, process.env.Jwt_sec, { expiresIn: '5d' })
        console.log('accesstoken', accessToken);
        const { password, ...others } = DBdata._doc
        res.status(200).json({ ...others, accessToken })


    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router
