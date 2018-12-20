import React, {Component} from 'react';
import Geocode from "react-geocode";
import Map from "./Map"
import './App.css';

Geocode.setApiKey("AIzaSyAhD7lkBbVnc1yZ2pHmtCJCR2OJh5yLNu0");
Geocode.enableDebug();


Geocode.fromAddress("casablanca").then(
    response => {
        const {lat, lng} = response.results[0].geometry.location;
        console.log("From address:" + lat + ', ' + lng);
    },
    error => {
        console.error(error);
    }
);

Geocode.fromLatLng("33.5731104", "-7.589843399999999").then(
    response => {
        const address = response.results[0].formatted_address;
        console.log("From coordinates: " + address);
    }
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mapSettings: {
                center: {
                    lat: 55.016334,
                    lng: 82.933656
                },
                zoom: 11,
                name: 'Misha dom'
            }
        };
    }

    render() {
        return (
            <div>
                {/*<input style={{display: 'block'}} type='text' ref = {this.center.lat}/>*/}
                {/*<input style={{display: 'block'}} type='text' ref = {this.center.lng}/>*/}
                {/*<input style={{display: 'block'}} type='text' ref = {this.center.name}/>*/}
                <div style={{height: '300px', width: '100%'}}>
                    <Map mapSettings={this.state.mapSettings}/>
                </div>
            </div>
        );
    }
}

export default App;
