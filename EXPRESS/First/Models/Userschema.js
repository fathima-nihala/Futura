const mongoose=require('mongoose') //import mongoose

const Userschema=new mongoose.Schema({  //This code defines a Mongoose schema named "Userschema".schema describes the structure of documents . "Userschema" is userdefined.
    firstname:{type:String},
    secondname:{type:String},
    dob:{type:String},
    age:{type:String},
    address:{type:String},
    email:{type:String},
    password:{type:String},
    phone:{type:String},
    image:{type:String},
},{timestamps:true})  // to add date and time the value is added to DB / edited

module.exports=mongoose.model("AAbatch",Userschema)   //AAbatch is the name of collection we are creating