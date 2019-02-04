import React, {Component} from 'react';
import Geocode from "react-geocode";
import Map from "./Map"
import './App.css';

Geocode.setApiKey("--key--");
Geocode.enableDebug();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 55.016334,
                lng: 82.933656
            },
            lat: 55.016334,
            lng: 82.933656,
            name: 'My Home'
        };
        this.handleChange = this.handleChange.bind(this);
        this.setMarkerFromCoordinates = this.setMarkerFromCoordinates.bind(this);
        this.setMarkerFromName = this.setMarkerFromName.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    setMarkerFromCoordinates() {
        this.setState({center: [this.state.lat, this.state.lng]});
        Geocode.fromLatLng(this.state.lat, this.state.lng).then(
            response => {
                const address = response.results[0].formatted_address;
                setTimeout(() => this.setState({name: address}));
                console.log("From coordinates " + this.state.lat + ", " + this.state.lng + ":" + address);
            }
        );
    }

    setMarkerFromName() {
        Geocode.fromAddress(this.state.name).then(
            response => {
                const {lat, lng} = response.results[0].geometry.location;
                setTimeout(() => {
                    this.setState({lat: lat});
                    this.setState({lng: lng});
                });
                console.log("From address " + this.state.name + ": " + +lat + ', ' + lng);
            },
            error => {
                console.error(error);
            }
        );
    }

    render() {
        return (
            <div>
                <div className="control">
                    <div>
                        <input style={{display: 'block'}} type='text' name='lat' value={this.state.lat}
                               onChange={this.handleChange}/>
                        <input style={{display: 'block'}} type='text' name='lng' value={this.state.lng}
                               onChange={this.handleChange}/>
                        <button onClick={this.setMarkerFromCoordinates}>
                            Set Marker From Coordinates
                        </button>
                    </div>
                    <div>
                        <input style={{display: 'block'}} type='text' name='name' value={this.state.name}
                               onChange={this.handleChange}/>
                        <button onClick={this.setMarkerFromName}>
                            Set Marker From Name
                        </button>
                    </div>
                </div>
                <div style={{height: '300px', width: '100%'}}>
                    <Map center={this.state.center} lat={this.state.lat} lng={this.state.lng} name={this.state.name}/>
                </div>
            </div>
        );
    }
}

export default App;
