const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Link = mongoose.model('Link')


router.get('/:dns', async (req, res, next) => {
    try {
        const link = await Link.findOne({ dns: req.params.dns })
        if(!link) throw Error('Link Not Found!')

        let url = link.url
        if(!url.includes('http')) url = 'http://' + url
        console.log(url);
        
        res.redirect(url)

    } catch (error) {
        next(error)
    }
})

module.exports = router;
