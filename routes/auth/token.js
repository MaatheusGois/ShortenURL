var jwt = require('jsonwebtoken')

module.exports = async (token) => {
    return await jwt.verify(token, process.env.SECRET, function (err, decoded) {
      if (err) return false
      return true
    })
}