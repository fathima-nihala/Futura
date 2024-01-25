const mongoose = require('mongoose')

const UserSchema=new mongoose.Schema({
    vrNo:{type: Number, required: true },
    vrDate:{ type: String, required: true },
    name:{type: String, required: true},
    amount:{ type: Number, required: true },
    data:{ type: Number, required: true },
    rows: { type: String, required: true },
    // itemname:{ type: String, required: true },
    // qty:{ type: Number, required: true },
    // rate: { type: Number, required: true },
    // amount:{ type: Number, required: true },
},{timestamps:true})

module.exports=mongoose.model('sales',UserSchema)