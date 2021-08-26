import React, { useState }  from "react";
import uuid from 'react-uuid';
import ReactBingMap, { Pushpin, Polyline ,Layer} from "@3acaga/react-bing-maps";
import './App.css';
import config from './config/config';
import {CoordinatsForm} from './components/CoordinatsForm';

const App= () => {
  const [markers, setMarkers] = useState([]);
  const addMarkers = (latitude,longitude) => {
    const nMark = {
      latitude,
      longitude
    }
    setMarkers(oldArray => [...oldArray, nMark]);
  }
  const DrawPoligon = () => {
    if(markers.length<3){
      return markers.map((mark,index)=>
        <Pushpin key={uuid()} location={mark} />
      )
    }else{
      return markers.map((mark,index)=>
        index < markers.length-1?
        <Polyline key={uuid()} path={[markers[index], markers[index+1]]} />
        :<Polyline key={uuid()} path={[markers[index], markers[0]]} />
      )
    }
  }
  return (
    <div className="app-container">
      <CoordinatsForm addMarkers={addMarkers}/>
        <div style={{ height: 600}}>
          <div style={{ height: 600}}>
              <ReactBingMap apiKey={config.key}>
                  <DrawPoligon/>
                </ReactBingMap>
            </div>
        </div>
    </div>
 );
};

export default App;