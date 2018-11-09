import React from 'react'
import {getAllDate} from '../api'
import Week from './Week'

class Month extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      monthData: [],
      procDate: []
    }

    this.renderWeeks = this.renderWeeks.bind(this)
  }

  componentDidMount () {
    let {
      indexYear,
      indexMonth
    } = this.props

    let searchIndex = String(indexYear).concat(String(indexMonth))

    getAllDate(searchIndex)
      .then(monthData => {
        this.setState({monthData})
      })
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.props.indexYear !== prevProps.indexYear) {
      let {
        indexYear,
        indexMonth
      } = this.props

      let searchIndex = String(indexYear).concat(String(indexMonth))

      getAllDate(searchIndex)
        .then(monthData => {
          this.setState({monthData})
        })
    }
  }

  renderWeeks () {
    // let weeks1 = []
    let tmpMonth = []
    let orgDates = []

    let fstDow = ''
    let x = 0
    let cnt = 0

    this.state.monthData.map(dates => {
      if (x === 0) {
        fstDow = dates.date_part
      }
      x++
      // orgDates.push(dates.to_char.substr(0, 2))
      orgDates.push(dates.to_char)
    })

    for (let i = 0; i < 35; i++) {
      tmpMonth[i] = ''
    }

    orgDates.map(dates => {
      tmpMonth[fstDow + cnt] = dates
      cnt++
    })

    return (
      <Week key={tmpMonth}
        date={tmpMonth}
      />
    )
  }

  render () {
    let {
      indexMonth
    } = this.props

    let label = ''
    switch (indexMonth) {
      case '01':
        label = 'January'
        break
      case '02':
        label = 'February'
        break
      case '03':
        label = 'March'
        break
      case '04':
        label = 'April'
        break
      case '05':
        label = 'May'
        break
      case '06':
        label = 'June'
        break
      case '07':
        label = 'July'
        break
      case '08':
        label = 'August'
        break
      case '09':
        label = 'September'
        break
      case '10':
        label = 'Octorber'
        break
      case '11':
        label = 'November'
        break
      case '12':
        label = 'December'
        break
      default:
        label = 'N/A'
    }

    return (
      <div>
        <h1>{label}</h1>
        <div className="container">
          <div className="row seven-cols">
            <div className="col-md-1"><b>Sun</b></div>
            <div className="col-md-1"><b>Mon</b></div>
            <div className="col-md-1"><b>Thu</b></div>
            <div className="col-md-1"><b>Wed</b></div>
            <div className="col-md-1"><b>Thu</b></div>
            <div className="col-md-1"><b>Fri</b></div>
            <div className="col-md-1"><b>Sat</b></div>
          </div>
        </div>

        {this.renderWeeks()}

      </div>
    )
  }
}

export default Month
