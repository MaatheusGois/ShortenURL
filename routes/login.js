const express = require('express')
const router = express.Router()
const jsonwebtoken = require('jsonwebtoken')
const jwt = require('../auth/middleware')
const token = require('../auth/token')
const mongoose = require('mongoose')
const User = mongoose.model('User')


//LOGIN
router.post('/login', async (req, res, next) => {
    let user = await User.findOne({
        user: req.body.user
    })
    try {
        if (user && user.checkPassword(req.body.senha)) {
            const id = user.id
            var token = jsonwebtoken.sign({
                id
            }, process.env.SECRET, {
                expiresIn: 3600 // expires in 1h
            })
            res.cookie('auth', token)
            res.render('admin/dashboard')
        } else {
            res.status(500).send('Login inválido!')
        }
    } catch (err) {
        next(err)
    }
})

//LOGOUT
router.get('/logout', jwt, async function (req, res) {
    res.clearCookie('auth')
    res.redirect('/admin/')
});