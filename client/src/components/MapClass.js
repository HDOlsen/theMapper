import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../store/actionCreators'
import {MyMapComponent} from './Map'
import {GOOGLE_MAPS_KEY} from '../credentials'

class MapClass extends Component {
  render() {
    let countries = this.props.country.map((ctry) => {
      return (
          <div className="mapClass">
            <li key={ctry.numericCode}></li>
            <h2 className="mapName">{ctry.name}</h2>
          <div>
            <MyMapComponent 
              isMarkerShown
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`}
            lat = {ctry.latlng[0]}
            lng = {ctry.latlng[1]}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `450px`, width:`900px`, paddingLeft:`35px` }} />}
            mapElement={<div style={{ height: `100%` }} />}/>
          </div>
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



export default connect (mapStateToProps)(MapClass)
