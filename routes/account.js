const express = require('express')
const isAuthenticated = require('../middlewares/isAuthenticated')

const router = express.Router()
const User = require('../models/user')

router.post('/signup', async (req, res) => {
  const { username, password } = req.body

  const data = await User.create(req.body)

  req.session.username = username
  req.session.password = password

  res.status(201).send(data)
})

router.post('/login', async (req, res, next) => {
  try {
    const { username, password } = req.body

    const data = await User.findOne({ username })

    if (data.password === password) {
      req.session.username = username
      req.session.password = password

      res.status(200).send(data)
    } else {
      throw new Error('Wrong credentials')
    }
  } catch (error) {
    next(error)
  }
})

router.post('/logout', isAuthenticated, (req, res) => {
  req.session.username = null
  req.session.password = null
  res.send('ok')
})

module.exports = router
