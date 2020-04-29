const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Shorten = mongoose.model('Shorten')
// const jwt = require('../auth/middleware')

// Create
router.post('/shortens', async (req, res, next) => {
    try {
        res.json({
            success: true,
            content: await Shorten.create(req.body)
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Read
router.get('/shortens', async (req, res, next) => {
    try {
        res.json({
            success: true,
            content: await Shorten.find()
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Read by
router.get('/shorten', async (req, res, next) => {
    try {
        res.json({
            success: true,
            content: await Shorten.findById(req.query.id)
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Update
router.put('/shorten', async (req, res, next) => {
    try {
        res.json({
            success: true,
            content: await Shorten.findByIdAndUpdate(req.query.id, req.body)
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Delete
router.delete('/shorten', async (req, res, next) => {
    try {
        res.json({
            success: true,
            content: await Shorten.findByIdAndRemove(req.query.id)
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})


module.exports = router
