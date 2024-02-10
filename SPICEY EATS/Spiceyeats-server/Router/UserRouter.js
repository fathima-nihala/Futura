const router = require('express').Router()
const Jwt = require('jsonwebtoken')
const crypto=require('crypto-js')
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
        password: Crypto.AES.encrypt(req.body.password, process.env.Crypto_js).toString(),
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
        console.log('DBdata', DBdata);

        // const hashedPassword = Crypto.AES.decrypt(DBdata.password, process.env.Crypto_js)
        // console.log('hashedPassword', hashedPassword);

        const hashedPassword=crypto.AES.decrypt(DBdata.password,process.env.Crypto_js)
        console.log('hashed password',hashedPassword);

        const originalPassword = hashedPassword.toString(Crypto.enc.Utf8)
        console.log('originalPassword'.originalPassword);
        originalPassword != req.body.password && res.status(401).json({ Response: "password & email doesn't match" })

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
