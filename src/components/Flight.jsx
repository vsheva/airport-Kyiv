import React from 'react';

const Flight = ({ id, terminal, time, destination, status, airline, flightCode, logo }) => {
  return (
    <tr>
      <td>
        <span className="terminal terminal_A">{terminal}</span>
      </td>
      <td>{time}</td>
      <td>{destination}</td>
      <td>{status}</td>
      <td className="airline">
        {airline}
        <img className="item-logo" src={`https://api.iev.aero${logo}`} alt="logo" />
      </td>
      <td className="td-hiden">{flightCode}</td>
    </tr>
  );
};

export default Flight;
