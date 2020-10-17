/* eslint-disable @typescript-eslint/no-var-requires */
const mongoose = require('mongoose')
const { Schema } = mongoose

const memberSchema = new Schema({
  name: String,
  firstSurname: String,
  secondSurname: String,
  memberNumber: Number,
  isAdmin: Boolean
})

module.exports = mongoose.model('Member', memberSchema)
