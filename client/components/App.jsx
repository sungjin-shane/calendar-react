import React from 'react'
import {getAllCountries} from '../api'
import Months from './Months'

class App extends React.Component {
  constructor (props) {
    super(props)
    let today = new Date()
    let tmpYear = today.getFullYear()
    this.state = {
      year: tmpYear
    }

    this.changeYear = this.changeYear.bind(this)
  }

  changeYear () {
    let searchYear = document.getElementById('yearInput').value
    if ((searchYear.length > 4) || (searchYear.length < 4)) {
      alert('Please input correct year by YYYY fromat!')
      return
    }

    console.log('searchYear', searchYear)
    if (searchYear === String(this.state.year)) {
      alert('Same year!')
      return
    }

    this.setState({year: searchYear})
    console.log('getele===>', searchYear)
  }

  componentDidMount () {
    // let today = new Date()
    // // let dd = today.getDate()
    // // let mm = today.getMonth() + 1
    // let year = today.getFullYear()
    // this.setState({year: year})

    // console.log('currentYear------>', year)
  }

  render () {
    var indexYear = this.state.year
    console.log('333333indexYear', indexYear)

    return (
      <div>

        {/* <Month isLogin={loginStatus}/> */}
        <div className="row">
          <div className="col-sm-4"> <input type="text" id="yearInput" className="form-control" /></div>
          <div className="col-sm-4"> <button type="button" className="btn btn-primary" onClick={this.changeYear}> Searching this year</button></div>
          <div className="col-sm-4"> </div>
        </div>

        <div className="row">
          <div className="col-sm-4"><Months indexYear={indexYear} indexMonth={'01'}/></div>
          <div className="col-sm-4"><Months indexYear={indexYear} indexMonth={'02'}/></div>
          <div className="col-sm-4"><Months indexYear={indexYear} indexMonth={'03'}/></div>
        </div>
        <div className="row">
          <div className="col-sm-4"><Months indexYear={indexYear} indexMonth={'04'}/></div>
          <div className="col-sm-4"><Months indexYear={indexYear} indexMonth={'05'}/></div>
          <div className="col-sm-4"><Months indexYear={indexYear} indexMonth={'06'}/></div>
        </div>
        <div className="row">
          <div className="col-sm-4"><Months indexYear={indexYear} indexMonth={'07'}/></div>
          <div className="col-sm-4"><Months indexYear={indexYear} indexMonth={'08'}/></div>
          <div className="col-sm-4"><Months indexYear={indexYear} indexMonth={'09'}/></div>
        </div>
        <div className="row">
          <div className="col-sm-4"><Months indexYear={indexYear} indexMonth={'10'}/></div>
          <div className="col-sm-4"><Months indexYear={indexYear} indexMonth={'11'}/></div>
          <div className="col-sm-4"><Months indexYear={indexYear} indexMonth={'12'}/></div>
        </div>

      </div>
    )
  }
}

export default App
