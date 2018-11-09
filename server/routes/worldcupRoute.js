const express = require('express')
const db = require('../db')
const router = express.Router()

router.get('/:searchIndex', (req, res) => {
  const searchIndex = req.params.searchIndex
  console.log('searchIndex', searchIndex)
  db.getAll(searchIndex)
    .then(worldcup => {
      res.json(worldcup)
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
      res.status(500).send('Unable to read from database')
    })
})

// router.get('/:id', (req, res) => {
//   const id = req.params.id
//   db.getGroup(id)
//     .then(worldcup => {
//       res.json(worldcup)
//     })
//     .catch(err => {
//     // eslint-disable-next-line no-console
//       console.error(err)
//       res.status(500).send('Unable to read from database')
//     })
// })

router.put('/', (req, res) => {

})

router.post('/', (req, res) => {

})

router.delete('/:id', (req, res) => {

})

module.exports = router
