const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('../auth/middleware')


//CREATE
router.post('/', jwt, async (req, res, next) => {
    try {
        let user = new User(req.body)
        user.senha = user.hashPassword(user.senha)
        await user.save()
        res.json(user)
    } catch (err) {
        next(err)
    }
})

// READ
router.get('/', jwt, async (req, res, next) => {
    try {
        let users = await User.find({})
        res.json(users)
    } catch (err) {
        next(err)
    }
})

//UPDATE
router.put('/', jwt, async (req, res, next) => {
    try {
        let user = await User.findOne({
            user: req.body.user
        })
        if (user){
            user.senha = user.hashPassword(user.senha)
            await user.save()
            res.json(user)
        } else {
            res.json({ err: "User inválido!" })
        }

    } catch (err) {
        next(err)
    }
})

//DELETE
router.delete('/', jwt, async (req, res, next) => {
    try {
        let user = await User.deleteMany({})
        res.json(user)
    } catch (err) {
        next(err)
    }
})

module.exports = router