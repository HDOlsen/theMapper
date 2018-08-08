import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actionCreators'

class History extends Component {
  render() {
    let countries = this.props.search.map((country) => {
      return (
        <div className="mapClass">
            <li key={country.numericCode}>
            <h2 className="country">{country.name}</h2>
            <img src={country.flag} alt={country.nativeName}/>
            </li>
        </div>
      )
    })

    return (
      <div>
          {countries}
        </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    search : state.search
  }
}


export default connect (mapStateToProps)(History)
