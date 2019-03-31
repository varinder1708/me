import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

export class Mapcomponent extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
  }
  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    return (
     
        <Map
          style={{
            minWwidth: "200px",
            minHeight: "200px"
          }}
          google={this.props.google}
          zoom={14}
        >
          <Marker
            onClick={this.onMarkerClick}
            icon={{
              url: "/img/icon.svg",
              anchor: new window.google.maps.Point(32, 32),
              scaledSize: new window.google.maps.Size(64, 64)
            }}
        
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
     
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyC8eX3HCaxMC9CEJ8KVTZAiaxyLtcSyNKI",
  v: "3"
})(Mapcomponent);
