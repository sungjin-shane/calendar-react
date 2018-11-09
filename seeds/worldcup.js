exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('worldcup').del()
    .then(function () {
      // Inserts seed entries
      return knex('worldcup').insert([
        {country_id: 1, country_name: 'New Zealand', country_group: 'A', win_point: 5},
        {country_id: 2, country_name: 'Brazil', country_group: 'A', win_point: 3},
        {country_id: 3, country_name: 'Germany', country_group: 'A', win_point: 2},
        {country_id: 4, country_name: 'England', country_group: 'A', win_point: 5},
        {country_id: 5, country_name: 'Koera', country_group: 'B', win_point: 3},
        {country_id: 6, country_name: 'France', country_group: 'B', win_point: 1},
        {country_id: 7, country_name: 'Australia', country_group: 'B', win_point: 2},
        {country_id: 8, country_name: 'Colombia', country_group: 'B', win_point: 4},
        {country_id: 9, country_name: 'Sweden', country_group: 'C', win_point: 4},
        {country_id: 10, country_name: 'Poland', country_group: 'C', win_point: 3},
        {country_id: 11, country_name: 'Spain', country_group: 'C', win_point: 2},
        {country_id: 12, country_name: 'Mexico', country_group: 'C', win_point: 5}
      ])
    })
}
