const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Shorten = new Schema({
    dns: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    clicks: Number,
    data: [String]
})

mongoose.model('Shorten', Shorten)