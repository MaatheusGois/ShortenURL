const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Shorten = new Schema({
    shorten: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true
    },
    clicks: Number,
    data: [String]
})

mongoose.model('Shorten', Shorten)