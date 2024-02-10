const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: String },
    address: { type: String },
    phone: { type: String },
}, { timestamps: true })

module.exports = mongoose.model('Mtest', UserSchema)