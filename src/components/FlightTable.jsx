import React from 'react';

const FlightTable = () => {
  return (
    <thead>
      <tr className="table">
        <th className="table__terminal">Terminal</th>
        <th className="table__time">Local time</th>
        <th className="table__destination">Destination</th>
        <th className="table__status">Status</th>
        <th className="table__airline">Airline</th>
        <th className="td-hiden">Flight</th>
      </tr>
    </thead>
  );
};

export default FlightTable;
