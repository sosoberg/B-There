import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import events from '../../events.json'

import './style.css'

const AnyReactComponent = ({ text, marker }) => <div className="markerDiv">{marker}<img src="./images/star.png" alt="staricon"/>{text}</div>;

class MapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 47.60,
      lng: -122.33
    },
    zoom: 11
  };

  render() {

    var d = new Date();
    var n = d.getDay() - 1;

    const lat = events[n].lat
    const lon = events[n].lon
    const title = events[n].name

    return (
      // Important! Always set the container height explicitly
      <div id="map">
        <div style={{ height: '76vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCUXkG-5a5cdEyPP2Ki6sg-0Ckc9qz06W8" }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
            <AnyReactComponent
                lat={lat}
                lng={lon}
                marker="^"
                text={title}
            />
            </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default MapComponent;