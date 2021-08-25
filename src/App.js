import React, { useState }  from "react";
import ReactBingMap, { Pushpin, Polyline ,Layer} from "@3acaga/react-bing-maps";
import './App.css';
const key = "Ao93YLyuFpHiqjMr6D0LN5ISC_BtP8etVqcntCxFioHHVxpyrE0999Ous0x1FEUY";

const App= () => {
  const [choice, setChoice] = useState("Add by Cords");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [markers, setMarkers] = useState([]);
  const types = ["Add by Cords", "Add by Place"];
  const options = types.map((mapAddMarkOption) => {
    return <option value={mapAddMarkOption}>{mapAddMarkOption}</option>;
  });
  console.log(choice);
  const handleMapAddMark = (event) => {
    setChoice(event.target.value);
  };
  const handleSetLatitude = (event) => {
    setLatitude(event.target.value);
  }
  const handleSetLongitude = (event) => {
    setLongitude(event.target.value);
  }
  const InputCords = () =>  <div>
    <label>
      latitude
      <input
        name="numberOfGuests"
        type="number"
        value={latitude}
        onChange={handleSetLatitude} />
    </label>
    <label>
    longitude
      <input
        name="numberOfGuests"
        type="number"
        value={longitude}
        onChange={handleSetLongitude} />
    </label>
  </div>
  const handleSubmit = (event) => {
    event.preventDefault();
    const mark = {
      latitude,
      longitude
    }
  setMarkers(oldArray => [...oldArray, mark]);
   setLatitude(0);
   setLongitude(0);
  }
  const DrawPoligon = () => {
    if(markers.length<3){
      return markers.map((mark,index)=>
        <Pushpin key={index} location={mark} />
      )
    }else{
      return markers.map((mark,index)=>
        index < markers.length-1?
        <Polyline key={index} path={[markers[index], markers[index+1]]} />
        :<Polyline key={index} path={[markers[index], markers[0]]} />
      )
    }
}
  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
          <h1>Coordinats Form</h1>
          <div className="App">
            <select onChange={handleMapAddMark}>{options}</select>
            {choice === "Add by Cords" && <InputCords/>}
          </div>
          <input type="submit" value="Submit" />
      </form>
        
    <div style={{ height: 600 }}>
   <div style={{ height: 600}}>
   <ReactBingMap apiKey={key}>
      <DrawPoligon/>
     </ReactBingMap>
    </div>
    </div>
    </div>
 );;
};

export default App;