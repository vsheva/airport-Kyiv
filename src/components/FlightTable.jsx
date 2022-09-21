import React from 'react';
import DepartureList from './DepartureList.jsx';

const FlightTable = () => {
  return (
    <thead>
      <tr>
        <th>Terminal</th>
        <th>Local time</th>
        <th>Destination</th>
        <th>Status</th>
        <th>Airline</th>
        <th className="td-hiden">Flight</th>
      </tr>
    </thead>
  );
};

export default FlightTable;
