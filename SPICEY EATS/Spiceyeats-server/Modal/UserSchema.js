const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    firstname:{type:String},
    email:{type:String},
    password:{type:String},
    image:{type:String},
},{timestamps:true})

module.exports=mongoose.model("User",UserSchema)