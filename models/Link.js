const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Link = new Schema({
    dns: {
        type: String,
        required: true,
        unique: true
    },
    url: String,
    clicks: Number,
    data: [String]
})

mongoose.model('Link', Link)