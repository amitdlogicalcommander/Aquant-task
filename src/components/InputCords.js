// @flow 
import * as React from 'react';
import uuid from 'react-uuid';

export const InputCords = ({coordinates,handleSetCoordinate}) => {
  return (
    Object.entries(coordinates).map(([coordType,value])=> (<label className="label-coord-container" key={uuid()}>
        {coordType}
        <input
          name={coordType}
          type="number"
          value={value}
          onChange={handleSetCoordinate} />
      </label>)
    )
  );
};