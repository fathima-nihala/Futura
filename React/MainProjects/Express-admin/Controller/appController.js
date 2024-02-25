const nodemailer = require('nodemailer')
const Mailer = require("../Models/MailUser")
const dotenv = require('dotenv')
dotenv.config()

const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:process.env.EMAIL,
        pass:process.env.EMAIL_PASSWORD
    }
});
console.log('check ****' ,Math.random());


function generateOTP(){
    return Math.floor(1000 + Math.random() * 9000).toString();
}

const signup=async(req,res)=>{
    const {email}=req.body;

    console.log('124',email);
    const otp = generateOTP();
    const otpExpiration=new Date(Date.now() + 5 * 60 * 1000);

    console.log(
        otp,
        otpExpiration,
        email
    );

    const user=new Mailer({
        email,
        otp,
        otpExpiration,
    })

    try{
        await user.save();
        // res.status(200).json(user)

        //send OTP via email (its send saying how to do and where to send .)
        const mailOptions={
            from:process.env.EMAIL,
            to:email,
            subject:"your otp code",
            text:`Your otp code is shown below: ${otp}`,
        };

        console.log("mail options",mailOptions);
        const info=await transporter.sendMail(mailOptions);  //to send mail

        console.log("Email send:",info.response);
        return res.status(200).json({message:"OTP send seccussfully",otp})
    }
    catch(err){
        console.log("Error saving user:", err);
        return res.status(500).json({error:"Error sendimg OTP mail"})
    }  
}
module.exports={signup};