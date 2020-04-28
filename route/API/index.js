const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Link = mongoose.model('Link')
// const jwt = require('../auth/middleware')

// Create
router.post('/create', async (req, res, next) => {
    try {
        res.json({
            success: true,
            content: await Link.create(req.body)
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Read
router.get('/readAll', async (req, res, next) => {
    try {
        res.json({
            success: true,
            content: await Link.find()
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Read ne
router.get('/read/:id', async (req, res, next) => {
    try {
        res.json({
            success: true,
            content: await Link.findById(req.params.id)
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Update
router.post('/update/:id', async (req, res, next) => {
    try {
        res.json({
            success: true,
            content: await Link.findByIdAndUpdate(req.params.id, req.body)
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})

// Delete
router.get('/delete/:id', async (req, res, next) => {
    try {
        res.json({
            success: true,
            content: await Link.findByIdAndRemove(req.params.id)
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
})


module.exports = router
