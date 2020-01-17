var jwt = require('jsonwebtoken')


module.exports = (req, res, next) => {
    var token = req.cookies.auth

    if (!token) return res.redirect('/admin')
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.redirect('/admin')
      req.userId = decoded.id;
      next();
    });
  }
