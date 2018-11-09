// const knex = require('knex')
// const config = require('../knexfile').development
// const db = knex(config)

var environment = process.env.NODE_ENV || 'development'
var config = require('../knexfile')[environment]
var db = require('knex')(config)

module.exports = {
  getAll
}

function getAll (searchIndex) {
  let indexMonth = searchIndex.substr(4, 2)
  let indexYear = searchIndex.substr(0, 4)
  // console.log('---indexyyyy=>', indexYear)
  // console.log('---indexmm=>', indexMonth)

  let searchFrom = String(indexYear).concat('-01-01')
  let searchTo = String(indexYear).concat('-12-31')
  let month = indexMonth
  let params = {from: searchFrom, to: searchTo, month: month}

  return db.raw(`select to_char(d, 'DD/MM/YYYY'), EXTRACT(DOW FROM d)from (
    select generate_series(
             (:from),
             (:to),
             interval '1 day'
           )) as twenty_twenty(d)
  where date_part('month', twenty_twenty.d) = :month `, params)
}
