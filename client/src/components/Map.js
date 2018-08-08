import React, { Component } from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'


export const MyMapComponent =  withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{ lat: props.lat, lng: props.lng  }}>
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng }} />}
  </GoogleMap>

))

