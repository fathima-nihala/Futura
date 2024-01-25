const router = require('express').Router()
const ScentifyUser = require('../Model/UserSchema')
const Jwt = require('jsonwebtoken')
const Crypto = require('crypto-js')
const { verifyToken, verifyTokenAndauthorization } = require('../verifyTokn')
const multer = require('multer')

//to upload image
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../scentify/public/Profile');
    },
    filename: function (req, file, cb) {
        cb(null, req.originalname);
    }
});
const upload = multer({ storage: storage });

//post-register
router.post('/scentifypost', upload.single('image'), async (req, res) => {
    console.log('Request Body:', req.body);
    console.log('Uploaded File:', req.file);
    console.log('%%',req.file.originalname);

    const newUser = new ScentifyUser({
        email: req.body.email,
        firstname: req.body.firstname,
        image: req.file.originalname,
        password: Crypto.AES.encrypt(req.body.password, process.env.Crypto_js).toString()
    });

    console.log("newuser", newUser);

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});


//to login
router.post('/scentifylogin', async (req, res) => {
    console.log('login login', req.body);

    try {
        const DBdata = await ScentifyUser.findOne({ email: req.body.email })
        !DBdata && res.status(401).json({ response: 'please check your Email' })

        console.log('Backend Data', DBdata);

        const hashedPassword = Crypto.AES.decrypt(DBdata.password, process.env.Crypto_js)
        console.log('hashed password is', hashedPassword);

        const originalPassword = hashedPassword.toString(Crypto.enc.Utf8)
        console.log('Original password is', originalPassword);
        originalPassword != req.body.password && res.status(401).json({ response: "password and email doesnt match" })

        const accessToken = Jwt.sign({
            id: DBdata._id
        }, process.env.Jwt_sec,
            { expiresIn: '5d' })

        console.log("****", accessToken);
        const { password, ...others } = DBdata._doc
        // var Id=DBdata._id 
        res.status(200).json({ ...others, accessToken })
    } catch (err) {
        res.status(400)
    }
})

module.exports = router