import React from 'react';
import moment from 'moment';

const Flight = ({ terminal, time, destination, status, airline, flightCode, logo }) => {
  return (
    <tr className="flight">
      <td className="flight__terminal">
        <span className={`terminal terminal_${terminal.toUpperCase()}`}>{terminal}</span>
      </td>
      <td className="flight__time">{moment(time).format('kk:mm')}</td>
      <td className="flight__destination">{destination}</td>
      <td className="flight__status">{status}</td>
      <td className="flight__airline">
        <div className="flight__airline_logo">
          <img className="item-logo" src={`https://api.iev.aero/${logo}`} alt="logo" />
        </div>
        <div className="flight__airline_name">{airline}</div>
      </td>
      <td className="td-hiden">{flightCode}</td>
    </tr>
  );
};

export default Flight;
