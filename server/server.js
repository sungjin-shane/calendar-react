const express = require('express')
const worldcupRoute = require('./routes/worldcupRoute')
const server = express()
const path = require('path')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/v1/worldcup', worldcupRoute)

module.exports = server
