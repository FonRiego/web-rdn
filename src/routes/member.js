/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express')
const router = express.Router()

const Member = require('../models/Member')

router.get('/fetchMembers', async (req, res) => {
  const members = await Member.find()
  console.log('members', members)
  res.json(members)
})

router.post('/addMember', async (req, res) => {
  const member = new Member(req.body)
  console.log(member)
  await member.save()
  res.json({
    status: 'Member created'
  })
})

module.exports = router
