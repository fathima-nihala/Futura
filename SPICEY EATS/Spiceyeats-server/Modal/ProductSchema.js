const mongoose  = require('mongoose')

const ProductSchema = new mongoose.Schema({
    category:{type:String},
    type:{type:String},
    title:{type:String},
    description:{type:String},
    image:{type:String},
    price:{type:Number}
})

module.exports=mongoose.model("products",ProductSchema)