const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    phone: { type: Number },
    password: { type: String },
    confirmpassword: { type: String },
    gender: { type: String},
    male: { type: String },
    female: { type: String },
    other: { typr: String },
    image:{type:String},
}, { timestamps: true })

module.exports = new mongoose.model('dhanwis', UserSchema)