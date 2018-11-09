import React from 'react'
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

    if (searchYear === String(this.state.year)) {
      alert('Same year!')
      return
    }

    this.setState({year: searchYear})
  }

  render () {
    var indexYear = this.state.year
    return (
      <div>
        <div><h1>{indexYear}</h1></div>
        <div className="row">
          <div className="col-sm-4"> <input type="text" id="yearInput" className="form-control" /></div>
          <div className="col-sm-4"> <button type="button" className="btn btn-primary" onClick={this.changeYear}>Searching the year</button></div>
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
