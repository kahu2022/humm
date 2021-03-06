const express = require('express')
const router = express.Router()

const db = require('../db/db')

router.get('/', (req, res) => {
  db.getSessions()
    .then((sesh) => {
      return res.json(sesh)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
})

router.post('/', (req, res) => {
  db.addSessionBooking(req.body)
  .then(booking => {
    console.log("hey look a booking", booking)
      return res.json(booking)
  })
  .catch((err) => {
    res.status(500).json({ error: err.message })
  })
})

module.exports = router
