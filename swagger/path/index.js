const {readAll} = require('./shortens/get.swagger')
const {create} = require('./shortens/post.swagger')
const {readByID} = require('./shorten/get.swagger')

module.exports = {
    readAll,
    readByID,
    create
}