import React from 'react'
import {getAllCountries} from '../api'
import Day from './Day'

class Week extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      monthData: []
    }
  }

  componentDidMount () {
    console.log('this.props', this.props)
    // this.props.map(dates => {
    //   this.setState({monthData: dates})
    // })
  }

  render () {
    // console.log(this.props)
    let tmpWeek = [[]]
    let {
      date
    } = this.props

    var royalApart = [
      [0, 1, 2, 3, 4, 5],
      [11, 12, 13, 14, 15],
      [21, 22, 23, 24, 25],
      [31, 32, 33, 34, 35],
      [41, 42, 43, 44, 45]
    ]

    var x = new Array(5)

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
    console.log('ffffff', x)

    console.log('ddddate==>', date)

    return (
      <div>
        {/* <div className="row week" key={x[0]}>
          {x[0][5]}
        </div>
        <div className="row week" key={x[1]}>
          {x[1][3]}
        </div>
        <div className="row week" key={x[2]}>
          {x[2]}
        </div>
        <div className="row week" key={x[3]}>
          {x[3]}
        </div>
        <div className="row week" key={x[4]}>
          {x[4]}
        </div> */}

        {/* <div className="container" key={x[0]}>
          <div className="row seven-cols">
            <div className="col-md-1">{x[0][0]}</div>
            <div className="col-md-1">{x[0][1]}</div>
            <div className="col-md-1">{x[0][2]}</div>
            <div className="col-md-1">{x[0][3]}</div>
            <div className="col-md-1">{x[0][4]}</div>
            <div className="col-md-1">{x[0][5]}</div>
            <div className="col-md-1">{x[0][6]}</div>
          </div>
        </div> */}

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
