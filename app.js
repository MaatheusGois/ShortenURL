const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const hbs = require('hbs')
const swaggerUI = require('swagger-ui-express')
const {swaggerDocument} = require('./swagger')
require('dotenv-safe').config({
  allowEmptyValues: true
});


require('./model/index')

const indexRouter = require('./route/index')
const loginRouter = require('./route/login')
const userRouter = require('./route/user')
const dnsRouter = require('./route/admin/shorten')
const apiRouter = require('./route/API')

const app = express()


// view engine setup
app.set('views', path.join(__dirname, 'views'))
hbs.registerPartials(path.join(__dirname, '/views/partials'))
app.set('view engine', 'hbs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', loginRouter)
app.use('/user', userRouter)
app.use('/go', indexRouter)
app.use('/api/v1', apiRouter)
app.use('/api/docs/v1', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

const adminRouter = express.Router()
adminRouter.use(dnsRouter)
app.use('/admin', adminRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
