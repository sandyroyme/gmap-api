import React from 'react';
import { Marker } from "react-google-maps";

// function to create markers
const GoogleMarker = (props) => {
    return(props.beachData.default.features.map(location => {
        return (<Marker
          key={location.properties.LOCATION_ID}
          position={{
            lat: location.geometry.coordinates[0],
            lng: location.geometry.coordinates[1]
            
          }}
        />)
        }))
}
// end creating markers
export default GoogleMarker;