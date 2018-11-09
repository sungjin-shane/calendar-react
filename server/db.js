const knex = require('knex')
const config = require('../knexfile').development
const db = knex(config)

module.exports = {
  getAll,
  getGroup
}

// function getAll () {
//   return db('worldcup')
//     .select()
// }

function getAll (searchIndex) {
  // console.log('db.searchIndex=>', searchIndex)
  //var params = {from: '2018-01-01', to: '2018-12-31', month: 5}
  let indexMonth = searchIndex.substr(4, 2)
  let indexYear = searchIndex.substr(0, 4)
  console.log('---indexyyyy=>', indexYear)
  console.log('---indexmm=>', indexMonth)

  let searchFrom = String(indexYear).concat('-01-01')
  let searchTo = String(indexYear).concat('-12-31')
  let month = indexMonth
  let params = {from: searchFrom, to: searchTo, month: month}

  //   var params = {x1:1,dude:10};
  // return knex.raw("select * from foo where x1 = :x1 and dude = :dude",params);

  return db.raw(`select to_char(d, 'DD/MM/YYYY'), EXTRACT(DOW FROM d)from (
    select generate_series(
             (:from),
             (:to),
             interval '1 day'
           )) as twenty_twenty(d)
  where date_part('month', twenty_twenty.d) = :month `, params)

  // return db.raw(`select to_char(d, 'DD/MM/YYYY'), EXTRACT(DOW FROM d)from (
  //   select generate_series(
  //            (date '2018-01-01'),
  //            (date '2018-12-31'),
  //            interval '1 day'
  //          )) as twenty_twenty(d)
  // where date_part('month', twenty_twenty.d) = :month `, params)
}

function getGroup (id) {
  // id = "B' " + "'OR 1=1"
  // console.log(id)
  return db('worldcup')
    .select()
    .where('country_group', id)
}
