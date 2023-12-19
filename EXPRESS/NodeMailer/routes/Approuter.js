const router=require('express').Router()
const {signup}=require('../Controller/appcontroller')

router.post('/nodemailer',signup)

module.exports=router