const express = require('express')
const calendar = require('./routes/calendar')
const server = express()
const path = require('path')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/calendar', calendar)

module.exports = server
