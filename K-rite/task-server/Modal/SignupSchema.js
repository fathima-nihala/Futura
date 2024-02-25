const mongoose = require('mongoose')

const SignUpSchema = new mongoose.Schema({
    firstname: { type: String },
    email:{type : String},
    password:{type:String}
},{timestamps:true})

module.exports=new mongoose.model('kdata',SignUpSchema)