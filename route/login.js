const express = require('express')
const router = express.Router()
const jsonwebtoken = require('jsonwebtoken')
const jwt = require('./auth/middleware')
const token = require('./auth/token')
const mongoose = require('mongoose')
const User = mongoose.model('User')
const Shorten = mongoose.model('Shorten')


router.get('/', async (req, res, next) => {
    try {
        if (req.cookies) {
            let isValid = await token(req.cookies.auth)
            if (isValid) {
                const links = await Shorten.find()
                res.render('admin/shorten-list', { links })
            } else {
                res.render('login', {noAuth: true})
            }
        } else {
            res.render('login', {noAuth: true})
        }
    } catch (err) {
        next(err)
    }

})


router.post('/', async (req, res, next) => {
    let user = await User.findOne({
        user: req.body.user
    })
    try {
        if (user && user.checkPassword(req.body.password)) {
            const id = user.id
            var token = jsonwebtoken.sign({
                id
            }, process.env.SECRET, {
                expiresIn: 3600 // expires in 1h
            })
            res.cookie('auth', token)
            const links = await Shorten.find()
            res.render('admin/shorten-list', { links })
        } else {
            throw Error('Login inválido!')
        }
    } catch (err) {
        next(err)
    }
})

router.get('/logout', jwt, async function (req, res) {
    res.clearCookie('auth')
    res.redirect('/')
});

module.exports = router