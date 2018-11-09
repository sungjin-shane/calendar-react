import React from 'react'
import Day from './Day'

class Week extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      monthData: []
    }
  }

  render () {
    let {
      date
    } = this.props

    let x = new Array(5)
    for (var i = 0; i < x.length; i++) {
      x[i] = []
    }

    let k = 0
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 7; j++) {
        x[i].push(date[k])
        k++
      }
    }

    return (
      <div>
        <div className="container">
          {<Day key={x[0]} day={x[0]}/>}
        </div>
        <div className="container">
          {<Day key={x[1]} day={x[1]}/>}
        </div>
        <div className="container">
          {<Day key={x[2]} day={x[2]}/>}
        </div>
        <div className="container">
          {<Day key={x[3]} day={x[3]}/>}
        </div>
        <div className="container">
          {<Day key={x[4]} day={x[4]}/>}
        </div>

      </div>
    )
  }
}

export default Week
