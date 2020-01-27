import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Map from './components/Leaflet/Map'

import MapPolygons from './components/Leaflet/MapPolygons'

import WuhanVirusData from './data/wuhan-virus.json'

function App() {
  return (
    <div>
      <MapPolygons 
        map_data={WuhanVirusData}
      
      />
    
    <div style={{height: '300px', width: '300px'}}>
      <Map 
        
      />
    </div>
    </div>
  );
}

export default App;
