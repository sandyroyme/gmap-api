import React  from "react";
import { withGoogleMap, withScriptjs, GoogleMap } from "react-google-maps";
import GoogleMarker from '../GoogleMarker/GoogleMarker';

// Creating the Google map
class GoogleMapSections extends React.Component {
    constructor(props) {
        super(props);
        this.map = React.createRef();
      }
      render(){
        return(<GoogleMap
            ref={map => {
              this.map = map;
              
            }}
            onDragEnd={() => this.props.onMapIdle(this.map)}
            onZoomChanged={() => this.props.onMapIdle(this.map)}
            defaultZoom={10}
            defaultCenter={{ lat: -33.9, lng:151.2 }}
          >
            <GoogleMarker beachData={this.props.beachData}/>
          </GoogleMap>)
      }
    
  }
  
  export default withScriptjs(withGoogleMap(GoogleMapSections));
  // End creating google map