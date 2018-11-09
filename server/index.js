const server = require('./server')

const port = process.env.PORT || 3000
// eslint no-console: "off"
server.listen(port, function () {
  console.log('Listening on port', port)
})
