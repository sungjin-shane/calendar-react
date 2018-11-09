exports.up = (knex, Promise) => {
  return knex.schema.createTable('worldcup', table => {
    table.increments('country_id').primary()
    table.string('country_name')
    table.string('country_group')
    table.integer('win_point')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('worldcup')
}
