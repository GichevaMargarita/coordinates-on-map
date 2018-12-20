import React from 'react';
import GoogleMapReact from "google-map-react"
import './App.css';

const Marker = ({text}) => <div className="marker">{text}</div>;

class Map extends React.Component {

    render() {
        return (
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyAhD7lkBbVnc1yZ2pHmtCJCR2OJh5yLNu0'}}
                center={this.props.mapSettings.center}
                zoom={this.props.mapSettings.zoom}
            >
                <Marker
                    lat={this.props.mapSettings.lat}
                    lng={this.props.mapSettings.lng}
                    text={this.props.mapSettings.name}
                />
            </GoogleMapReact>
        );
    }
}

export default Map;