import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actionCreators'
import {MyMapComponent} from './Map'
import {GOOGLE_MAPS_KEY} from '../credentials'
class Post extends Component {
  render() {
    let countries = this.props.country.map((ctry) => {
      return (
          <div className="post">
            <li key={ctry.numericCode}></li>
            <h2 className="name">{ctry.name}</h2>
          <div className="map">
            <img className="flag" src={ctry.flag} alt={ctry.nativeName}/>
            <MyMapComponent 
              isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            lat = {ctry.latlng[0]}
            lng = {ctry.latlng[1]}
            loadingElement={<div style={{ height: `75%` }} />}
            containerElement={<div style={{ height: `350px`, width:`400px`, paddingLeft:`35px` }} />}
      mapElement={<div style={{ height: `100%` }} />}/>
          </div>
            <div className="info">
              <div>Country Abbreviation:{ctry.alpha3Code}</div>
              <div>Capital: {ctry.capital}</div>
              <div>Region: {ctry.subregion}</div>
              <div>Population: {ctry.population}</div>
            </div>
            <button className="btnD" onClick={() => this.props.onDeleteCoun(ctry)}><i class="fas fa-trash"></i></button>
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
    country : state.country
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteCoun : (country) => dispatch(actionCreators.deleteCountry(country))

  }
}


export default connect (mapStateToProps, mapDispatchToProps)(Post)
