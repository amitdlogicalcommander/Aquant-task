// @flow 
import React, { useState } from 'react';
import uuid from 'react-uuid'
import {InputCords} from './InputCords';
export const CoordinatsForm = ({addMarkers}) => {

  const [choice, setChoice] = useState("Add by Cords");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const options = ["Add by Cords", "Add by Place"].map((op) => {
    return <option key={uuid()} value={op}>{op}</option>;
  });
  const handleMapAddMark = (event) => {
    setChoice(event.target.value);
  };
  const handleSetCoordinate = (event) =>{
    const data = event.target.value;
    event.target.name === "latitude" ?
     setLatitude(data):
     setLongitude(data);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    addMarkers(latitude,longitude);
    setLatitude(0);
    setLongitude(0);
  }
  return (
      <form onSubmit={handleSubmit}>
          <h1>Coordinats Form</h1>
          <div className="App">
            <select className={"select-options"} onChange={handleMapAddMark}>{options}</select>
            {choice === "Add by Cords" && <InputCords coordinates={{latitude,longitude}} handleSetCoordinate={handleSetCoordinate}/>}
          </div>
          <input type="submit" value="Submit" />
      </form>
  );
};