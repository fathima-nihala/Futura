const mongoose = require('mongoose')

const RecipeUser = new mongoose.Schema({
    title:{type:String},
    ingredients:{type:String},
    preparationinstruction:{type:String},
    time:{type:String},
    servings:{type:String},
    dietarylabels:{type:String},
},{timestamps:true})

module.exports=new mongoose.model('Btrack', RecipeUser)