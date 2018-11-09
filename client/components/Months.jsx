import React from 'react'
import moment from 'moment'
import {getAllCountries} from '../api'
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

  // getData (searchIndex) {
  //   getAllCountries(searchIndex)
  //     .then(monthData => {
  //     // console.log(monthData)
  //       this.setState({monthData})
  //     })
  // }

  componentDidMount () {
    let {
      indexYear,
      indexMonth
    } = this.props

    console.log('indexYear1-------', indexYear)
    let searchIndex = String(indexYear).concat(String(indexMonth))
    console.log('searchIndex-------', searchIndex)

    getAllCountries(searchIndex)
      .then(monthData => {
        // console.log(monthData)
        this.setState({monthData})
      })

    console.log('componentDidMount')
  }

  componentDidUpdate (prevProps, prevState) {
    // if (prevState.path !== this.state.path) {
    //   let firebaseRef = firebase.database().ref(this.state.path)
    //   this.setState({firebaseRef})
    //   this.getData(firebaseRef)
    // }

    if (this.props.indexYear !== prevProps.indexYear) {
      let {
        indexYear,
        indexMonth
      } = this.props

      console.log('indexYear1-------', indexYear)
      let searchIndex = String(indexYear).concat(String(indexMonth))
      console.log('searchIndex-------', searchIndex)

      getAllCountries(searchIndex)
        .then(monthData => {
        // console.log(monthData)
          this.setState({monthData})
        })
    }
    console.log('componentDidUpdate')
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

    console.log('last_tmpMonth', tmpMonth)

    return (
      <Week key={tmpMonth}
        date={tmpMonth}
      />
    )
  }

  render () {
    let {
      indexYear,
      indexMonth
    } = this.props

    console.log('renderingwww', this.props)

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

    // let indexMonth = indexDate.substr(0, 2)
    // let indexYear = indexDate.substr(2, 4)

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
