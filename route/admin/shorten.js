const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Shorten = mongoose.model('Shorten')
const jwt = require('../auth/middleware')

router.get('/shorten-list', jwt, async (req, res, next) => {
    const links = await Shorten.find()
    res.render('admin/shorten-list', { links })
})

//CREATE
router.get('/shorten/create', jwt, async (req, res, next) => {
    try {
        res.render('admin/shorten')
    } catch (error) {
        next(error)
    }
})
router.post('/shorten/create', jwt, async (req, res, next) => {
    try {
        await Shorten.create(req.body)
        const links = await Shorten.find()
        res.render('admin/shorten-list', { links, success: 'Criado com sucesso!' })
    } catch (error) {
        next(error)
    }
})

//UPDATE
router.get('/shorten/editar/:id', jwt, async (req, res, next) => {
    let link = await Shorten.findById(req.params.id)

    res.render('admin/shorten', { link })
})
router.post('/shorten/editar/:id', jwt, async (req, res, next) => {
    await Shorten.findByIdAndUpdate(req.params.id, req.body)
    let links = await Shorten.find()
    res.render('admin/shorten-list', { links, success: 'Atualizado com sucesso!' })
})

//DELETE
router.get('/shorten/delete/:id', jwt, async (req, res, next) => {
    try {
        await Shorten.findByIdAndRemove(req.params.id)
        let links = await Shorten.find()
        res.render('admin/shorten-list', { success: 'Removido com sucesso!', links })
    } catch (error) {
        next(error)
    }
    
})


module.exports = router