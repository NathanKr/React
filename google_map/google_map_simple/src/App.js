import React, { Component } from 'react';
import './App.css';
import GoogleMapReact from 'google-maps-react';

class App extends Component {
  render() {
    const center = {lat: 59.95, lng: 30.33};
    const zoom = 11;

    return (
      <div className="App">
         <div style={{ height: '100vh', width: '100%' }}>
          <GoogleMapReact
            defaultCenter={center}
            defaultZoom={zoom}>
          </GoogleMapReact>
      </div>
      </div>
    );
  }
}

export default App;
