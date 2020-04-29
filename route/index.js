const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Shorten = mongoose.model('Shorten')
const JSON = require('circular-json');


router.get('/:dns', async (req, res, next) => {
  try {
    const link = await Shorten.findOne({ dns: req.params.dns })

    if (!link) throw Error('Shorten Not Found!')

    //Increments
    if(link.clicks) { 
      link.clicks += 1
    } else {
      link.clicks = 1 
    }
    if(link.data) {
      (link.data).push(JSON.stringify(req))
    } else {
      link.data = JSON.stringify(req)
    }
    
    // link.data = req
    await link.save()

    let url = link.url
    if (!url.includes('http')) url = 'http://' + url


    res.redirect(url)

  } catch (error) {
    next(error)
  }
})

module.exports = router;
