const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Shorten = mongoose.model('Shorten')
const jwt = require('../auth/middleware')

router.get('/dns-list', jwt, async (req, res, next) => {
    const links = await Shorten.find()
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
        await Shorten.create(req.body)
        const links = await Shorten.find()
        res.render('admin/dns-list', { links, success: 'Criado com sucesso!' })
    } catch (error) {
        next(error)
    }
})

//UPDATE
router.get('/dns/editar/:id', jwt, async (req, res, next) => {
    let link = await Shorten.findById(req.params.id)

    res.render('admin/dns', { link })
})
router.post('/dns/editar/:id', jwt, async (req, res, next) => {
    await Shorten.findByIdAndUpdate(req.params.id, req.body)
    let links = await Shorten.find()
    res.render('admin/dns-list', { links, success: 'Atualizado com sucesso!' })
})

//DELETE
router.get('/dns/delete/:id', jwt, async (req, res, next) => {
    try {
        await Shorten.findByIdAndRemove(req.params.id)
        let links = await Shorten.find()
        res.render('admin/dns-list', { success: 'Removido com sucesso!', links })
    } catch (error) {
        next(error)
    }
    
})


module.exports = router