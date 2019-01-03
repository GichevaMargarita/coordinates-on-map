import React from 'react';
import GoogleMapReact from "google-map-react"
import './App.css';

const Marker = ({text}) => <div className="marker">{text}</div>;

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }
        };
    }

    render() {

        return (
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyAhD7lkBbVnc1yZ2pHmtCJCR2OJh5yLNu0'}}
                center={this.state.center}
                zoom={1}
            >
                <Marker
                    lat={this.props.lat}
                    lng={this.props.lng}
                    text={this.props.name}
                />
            </GoogleMapReact>
        );
    }
}

export default Map;