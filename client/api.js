import request from 'superagent'

export function getAllDate (searchIndex) {
  return request
    .get('/v1/calendar/' + searchIndex)
    .then(res => {
      return res.body.rows
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}
