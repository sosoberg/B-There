import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './style.css'

const AnyReactComponent = ({ text }) => <div className="markerDiv"><img src="./images/star.png" alt="staricon"/>{text}</div>;

class MapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 47.60,
      lng: -125.50
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div id="map">
        <div>
        </div>
        <div style={{ height: '76vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: `AIzaSyCUXkG-5a5cdEyPP2Ki6sg-0Ckc9qz06W8` }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            >
            <AnyReactComponent
                lat={ 47.6062 }
                lng={ -122.3321 }
                text="Here"
            />
            </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default MapComponent;