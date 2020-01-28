import React, { Component } from "react";
import * as beachData from "../../data/location-beach.json";
import GoogleMapSections from '../GoogleMap/GoogleMap';
import PrintLabels from '../ListItems/PrintLabels';

class GoogleMapContainer extends Component {
  constructor(props) {
    super(props);
    this.map = React.createRef();
    this.bounds = {};
    this.state = {isMapEventTriggered:false, googleLatLngBounds:{}};
  }

  // Start getting the current mapviewport
  currentBound = (mapDetails) => {
    
    let ne = mapDetails.getBounds().getNorthEast();
    let sw = mapDetails.getBounds().getSouthWest();
    
    this.bounds.sw = { lat: sw.lat, lng: sw.lng };
    this.bounds.ne = { lat: ne.lat, lng: ne.lng };

    this.setState({isMapEventTriggered:true,googleLatLngBounds:mapDetails.getBounds()});
    
  }
  // End getting the current mapviewport

  // Rendering the content on DOM
  render() {
    const {isMapEventTriggered, googleLatLngBounds} = this.state;
    return (
      <div>
        <div className="labelContainers">
          <PrintLabels isMapEventTriggered={isMapEventTriggered} googleLatLngBounds={googleLatLngBounds} beachData={beachData}/>
        </div>
        <GoogleMapSections
          beachData={beachData}
          onMapIdle={(mapDetails) => this.currentBound(mapDetails)}
          googleMapURL="https://maps.googleapis.com/maps/api/js"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}
// End rendering the content on DOM

export default GoogleMapContainer;
