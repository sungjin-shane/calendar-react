const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/:searchIndex', (req, res) => {
  const searchIndex = req.params.searchIndex
  db.getAll(searchIndex)
    .then(calendar => {
      res.json(calendar)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

module.exports = router
