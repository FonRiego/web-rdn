/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const port = process.env.PORT
const mongodbUri = process.env.MONGODB_URI

const app = express()
app.set('port', port)

// Middlewares
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// Routes
const memberRoutes = require('./routes/member')
app.use('/api/member', memberRoutes)

// app.get('/', function(req, res) {
//   console.log('get / is working fine')
//   res.send('Example app listening on port' + ' ' + port)
// })

// Database connection --- wrdn
const options = { useNewUrlParser: true, useCreateIndex: true }
mongoose
  .connect(mongodbUri, options)
  .then(() => {
    console.log('Connected to DB')
  })
  .catch(err => {
    console.log(err)
  })

// Middleware for Vue.js router's history mode
const history = require('connect-history-api-fallback')
app.use(history())
app.use('/dist', express.static(path.join(__dirname, '/dist')))
// app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), function() {
  console.log('Example app listening on port' + ' ' + app.get('port'))
})
