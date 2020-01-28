import React from 'react';

// function to print the labels
const PrintLabels = (props) => {
    return props.beachData.default.features.map(location => {
      return (
        <div className={(props.isMapEventTriggered && !props.googleLatLngBounds.contains({ lat: location.geometry.coordinates[0], lng: location.geometry.coordinates[1] }) ) ? 'hideElement' : ''} key={location.properties.LOCATION_ID}>
          {location.properties.NAME}
        </div>
      )
      
    });
  }
  // End of function to print the labels

  export default PrintLabels;