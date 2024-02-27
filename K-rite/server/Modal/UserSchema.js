const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: { type: String },
    email: { type: String },
    password: { type: String }
},{timestamps:true})

module.exports=mongoose.model('KriteUser',userSchema)
