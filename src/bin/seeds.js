/* eslint-disable @typescript-eslint/no-var-requires */

// To execute this seed, run from the root of the project
// $ node src/bin/seeds.js
const mongoose = require('mongoose')
const User = require('../models/Member')

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

const members = [
  {
    name: 'Jorge',
    firstSurname: 'Díaz',
    secondSurname: 'Campillejo',
    memberNumber: 1,
    isAdmin: true
  },
  {
    name: 'Fake1',
    firstSurname: 'Fake1',
    secondSurname: 'Fake1',
    memberNumber: 3,
    isAdmin: false
  },
  {
    name: 'Fake2',
    firstSurname: 'Fake2',
    secondSurname: 'Fake2',
    memberNumber: 4,
    isAdmin: false
  },
  {
    name: 'Fake3',
    firstSurname: 'Fake3',
    secondSurname: 'Fake3',
    memberNumber: 6,
    isAdmin: false
  },
  {
    name: 'Alfonso',
    firstSurname: 'Mateo',
    secondSurname: 'Riego',
    memberNumber: 14,
    isAdmin: true
  },
  {
    name: 'Pablo',
    firstSurname: 'Martínez',
    secondSurname: 'Peón',
    memberNumber: 41,
    isAdmin: true
  },
  {
    name: 'Víctor',
    firstSurname: 'Mayor',
    secondSurname: 'Luna',
    memberNumber: 69,
    isAdmin: true
  }
]

User.create(members)
  .then(() => {
    console.log('members created!!!')
    // Close properly the connection to Mongoose
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })
