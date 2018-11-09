import React from 'react'
import {getAllCountries} from '../api'

class Day extends React.Component {
  constructor (props) {
    super(props)

    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth() + 1
    let yyyy = today.getFullYear()
    if (dd < 10) {
      dd = '0' + dd
    }
    if (mm < 10) {
      mm = '0' + mm
    }
    const tmpToday = dd + '/' + mm + '/' + yyyy

    this.state = {
      today: tmpToday
    }
    this.isToday = this.isToday.bind(this)
  }

  isToday (day) {
    console.log('ffffffffffffffff', this.state.today)
    if (day === String(this.state.today)) {
      return true
    } return false
  }

  componentDidMount () {

  }

  render () {
    console.log('day===>', this.props)
    let {
      day
    } = this.props

    return (
      // <span key={day.toString()}>{day}</span>
      <div className="row seven-cols" key={day[0]}>
        <div className="col-md-1"> { (this.isToday(day[0]) ? '★'.concat(String(day[5]).substr(0, 2)) : String(day[0]).substr(0, 2))} </div>
        <div className="col-md-1"> { (this.isToday(day[1]) ? '★'.concat(String(day[5]).substr(0, 2)) : String(day[1]).substr(0, 2))} </div>
        <div className="col-md-1"> { (this.isToday(day[2]) ? '★'.concat(String(day[5]).substr(0, 2)) : String(day[2]).substr(0, 2))} </div>
        <div className="col-md-1"> { (this.isToday(day[3]) ? '★'.concat(String(day[5]).substr(0, 2)) : String(day[3]).substr(0, 2))} </div>
        <div className="col-md-1"> { (this.isToday(day[4]) ? '★'.concat(String(day[5]).substr(0, 2)) : String(day[4]).substr(0, 2))} </div>
        <div className="col-md-1"> { (this.isToday(day[5]) ? '★'.concat(String(day[5]).substr(0, 2)) : String(day[5]).substr(0, 2))} </div>
        <div className="col-md-1"> { (this.isToday(day[6]) ? '★'.concat(String(day[5]).substr(0, 2)) : String(day[6]).substr(0, 2))} </div>

      </div>

    )
  }
}
export default Day
