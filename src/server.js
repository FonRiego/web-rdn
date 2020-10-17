/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

// Middlewares
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Routes
app.use(require('./routes'))

app.set('port', process.env.PORT || 3000)

app.get('/', function(req, res) {
  console.log('Example app listening on port' + ' ' + app.get('port'))
  res.send('Example app listening on port' + ' ' + app.get('port'))
})

// Database connection --- wrdn
const uri = 'mongodb://localhost:27017/wrdn'
const options = { useNewUrlParser: true, useCreateIndex: true }
mongoose
  .connect(uri, options)
  .then(() => {
    console.log('Connected to DB')
  })
  .catch(err => {
    console.log(err)
  })

// Middleware for Vue.js router's history mode
const history = require('connect-history-api-fallback')
app.use(history())
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), function() {
  console.log('Example app listening on port' + ' ' + app.get('port'))
})
