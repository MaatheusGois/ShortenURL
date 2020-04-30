const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const jwt = require('./auth/middleware')


router.post('/', jwt, async (req, res, next) => {
    try {
        let user = new User(req.body)
        user.password = user.hashPassword(user.password)
        await user.save()
        res.json(user)
    } catch (err) {
        next(err)
    }
})

router.get('/', jwt, async (req, res, next) => {
    try {
        let users = await User.find({})
        res.json(users)
    } catch (err) {
        next(err)
    }
})

router.put('/', jwt, async (req, res, next) => {
    try {
        let user = await User.findOne({
            user: req.body.user
        })
        if (user){
            user.password = user.hashPassword(user.password)
            await user.save()
            res.json(user)
        } else {
            res.json({ err: "User inválido!" })
        }

    } catch (err) {
        next(err)
    }
})

router.delete('/', jwt, async (req, res, next) => {
    try {
        let user = await User.deleteMany({})
        res.json(user)
    } catch (err) {
        next(err)
    }
})

async function createAdmin() {
    let user = await User.findOne({
        user: 'admin'
    })
    if(!user) {
        let body = {
            user: 'admin',
            password: '123'
        }

        let user = new User(body)
        user.password = user.hashPassword(user.password)
        await user.save()
        console.log('admin criado com sucesso!');
    } else {
        console.log('admin já existe!');
    }
}
createAdmin()

module.exports = router