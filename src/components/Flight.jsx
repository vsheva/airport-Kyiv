import React from 'react';
import moment from 'moment'

const Flight = ({ id, terminal, time, destination, status, airline, flightCode, logo }) => {
    console.log("trminal", terminal)

  return (
    <tr>
      <td>
        <span className={terminal =="A" ? "terminal terminal_A" : "terminal terminal_D"}>{terminal}</span>
      </td>
      <td>{moment(time).format("hh:mm")}</td>
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
