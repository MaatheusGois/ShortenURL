const mongoose = require('mongoose')
const md5 = require('md5')
const Schema = mongoose.Schema

const User = new Schema({
    user: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

User.methods.checkPassword = function (password) {
    return this.password === md5(password)
}

User.methods.hashPassword = function (password) {
    //TODO Melhorar hash 
    return md5(password)
}

mongoose.model('User', User)