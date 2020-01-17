const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Link = mongoose.model('Link')
const jwt = require('../auth/middleware')

router.get('/dns-list', jwt, async (req, res, next) => {
    const links = await Link.find()
    res.render('admin/dns-list', { links })
})

//CREATE
router.get('/dns/create', jwt, async (req, res, next) => {
    try {
        res.render('admin/dns')
    } catch (error) {
        next(error)
    }
})
router.post('/dns/create', jwt, async (req, res, next) => {
    try {
        await Link.create(req.body)
        res.render('admin/dashboard', {success: 'Criado com sucesso!'})
    } catch (error) {
        next(error)
    }
})

//UPDATE
router.get('/dns/editar/:id', jwt, async (req, res, next) => {
    let link = await Link.findById(req.params.id)

    res.render('admin/dns', { link })
})
router.post('/dns/editar/:id', jwt, async (req, res, next) => {
    await Link.findByIdAndUpdate(req.params.id, req.body)
    let links = await Link.find()
    res.render('admin/dns-list', { links, success: 'Atualizado com sucesso!' })
})

//DELETE
router.get('/dns/delete/:id', jwt, async (req, res, next) => {
    try {
        await Link.findByIdAndRemove(req.params.id)
        let links = await Link.find()
        res.render('admin/dns-list', { success: 'Removido com sucesso!', links})
    } catch (error) {
        next(error)
    }
    
})


module.exports = router