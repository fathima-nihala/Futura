const mongoose=require('mongoose')

const FbUserschema=new mongoose.Schema({
    firstname:{type:String},
    secondname:{type:String},
    password:{String},
    combinedinput:{String},
    gender:{String},
    day:{String},
    month:{String},
    year:{String},
},{timestamps:true})

module.exports=mongoose.model("FBbatch",FbUserschema)