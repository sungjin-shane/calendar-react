import request from 'superagent'

export function getAllCountries (searchIndex) {
  console.log('api.searchIndex', searchIndex)
  return request
    .get('/v1/worldcup/' + searchIndex)
    .then(res => {
      // console.log(res.body.rows)
      return res.body.rows
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
