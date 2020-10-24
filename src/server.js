/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config()

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
const memberRoutes = require('./routes/member')
app.use('/api/member', memberRoutes)

const hostname = process.env.HOST
const port = process.env.PORT

app.get('/', function(req, res) {
  console.log('get / is working fine')
  res.send('Example app listening on port' + ' ' + port)
})

// Database connection --- wrdn
const uri = `mongodb://${hostname}:27017/wrdn`
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
app.use('/dist', express.static(path.join(__dirname, '/dist')))
// app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, function() {
  console.log('Example app listening on port' + ' ' + port)
})
