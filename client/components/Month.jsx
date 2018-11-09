import React from 'react'
import moment from 'moment'
import {getAllCountries} from '../api'
import Week from './Week'

class Month extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      monthData: [],
      month: moment(),
      selected: moment().startOf('day')
    }

    this.renderWeeks = this.renderWeeks.bind(this)
  }

  componentDidMount () {
    getAllCountries()
      .then(monthData => {
        // console.log(monthData)
        this.setState({monthData})
      })
  }

  previous () {
    const {
      month
    } = this.state

    this.setState({
      month: month.subtract(1, 'month')
    })
  }

  next () {
    const {
      month
    } = this.state

    this.setState({
      month: month.add(1, 'month')
    })
  }

  select (day) {
    this.setState({
      selected: day.date,
      month: day.date.clone()
    })
  }

  renderWeeks () {
    let weeks = []
    let done = false
    let date = this.state.month.clone().startOf('month').add('w' - 1).day('Sunday')
    let count = 0
    let monthIndex = date.month()
    console.log('fffffffffffffffffffff---', date.clone())

    const {
      selected,
      month
    } = this.state

    while (!done) {
      weeks.push(
        <Week key={date}
          date={date.clone()}
          month={month}
          select={(day) => this.select(day)}
          selected={selected} />
      )

      date.add(1, 'w')

      done = count++ > 2 && monthIndex !== date.month()
      monthIndex = date.month()
    }

    return weeks
  }

  renderMonthLabel () {
    const {
      month
    } = this.state

    return <span className="month-label">{month.format('MMMM YYYY')}</span>
  }

  render () {
    return (
      <div>
        <h1>Javascrip Calendar by React!</h1>
        <section className="calendar">
          <header className="header">
            <div className="month-display row">
              <i className="arrow fa fa-angle-left" onClick={this.previous}/>
              {this.renderMonthLabel()}
              <i className="arrow fa fa-angle-right" onClick={this.next}/>
            </div>
            <div className="row day-names">
              <span className="day">Sun</span>
              <span className="day">Mon</span>
              <span className="day">Tue</span>
              <span className="day">Wed</span>
              <span className="day">Thu</span>
              <span className="day">Fri</span>
              <span className="day">Sat</span>
            </div>
          </header>
          {this.renderWeeks()}
        </section>
        {/* {this.state.monthData.map(country => {
          return <div className="row" key={country.to_char}>
            <div className="col-sm-6"> <h5>{country.to_char} </h5>
            </div>
          </div>
        })} */}

      </div>
    )
  }
}

export default Month
