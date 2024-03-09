const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        trim: true,
        minlength: 3
    },
    photoURL: {
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user'
        }
    }

})

module.exports=mongoose.model("user", UserSchema)