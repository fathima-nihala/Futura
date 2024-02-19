const mongoose = require('mongoose')

const CartSchema = new mongoose.Schema({
    title:{type:String},
    price:{type:String},
    itemQuantity:{type:String},
    image:{type:String},
    mrp:{type:String}
},{timestamps:true})

module.exports=new mongoose.model("cartData",CartSchema)
