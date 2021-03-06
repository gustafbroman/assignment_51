import React from 'react';
import './Map.scss';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Route, Switch, } from 'react-router-dom';

class MapContainer extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
                  {latitude: 47.359423, longitude: -122.021071},
                  {latitude: 47.2052192687988, longitude: -121.988426208496},
                  {latitude: 47.6307081, longitude: -122.1434325},
                  {latitude: 47.3084488, longitude: -122.2140121},
                  {latitude: 47.5524695, longitude: -122.0425407}]
        }
    }
    
    displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         text="My marker"
         onClick={() => console.log("You clicked me!")} />
        })
    }

    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
        };

        return (
            <div className="map-container">
                <Switch>
                    <Route exact path="/location/history">
                        <Map
                            google={this.props.google}
                            zoom={18}
                            style={mapStyles}
                            center={{ lat: 59.3339486, lng: 18.0705805}}
                            >
                        </Map>
                    </Route>
                    <Route path="/location">
                        <Map
                            google={this.props.google}
                            zoom={8}
                            style={mapStyles}
                            initialCenter={{ lat: 47.444, lng: -122.176}}
                            >
                            {this.displayMarkers()}
                        </Map>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCoo9OXagY3eG51JU8sicOXcWKio8-MDWs'),
    className: "map-container"
})(MapContainer);
