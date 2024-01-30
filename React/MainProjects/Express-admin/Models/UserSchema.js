    const mongoose=require('mongoose')

    const UserSchema=new mongoose.Schema({
        firstname:{type:String},
        email:{type:String},
        password:{type:String},
        type:{type:String},
        image:{type:String},
    },{timestamps:true})
    module.exports=new mongoose.model("User",UserSchema)