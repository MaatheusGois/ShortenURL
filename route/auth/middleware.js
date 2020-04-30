const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  var token =
    (req.body && req.cookies.auth) ||
    (req.body && req.body.access_token) ||
    (req.query && req.query.access_token) ||
    req.headers["authorization"];

  const tokenAccess = "";

  if (token.split(" ")[0] == "Bearer") {
    token = tokenAccess[1];
  }
  if (!token) return res.redirect("/");

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err) return res.redirect("/");
    req.userId = decoded.id;
    next();
  });
};
