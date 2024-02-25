const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    duedate: { type: String }
   
},{timestamps:true})

module.exports = new mongoose.model("krite", UserSchema)