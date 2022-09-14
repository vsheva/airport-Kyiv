import React from 'react';
import FlightTable from './FlightTable.jsx';
import FlightList from './FlightList.jsx';
import ArrivalList from './ArrivalList.jsx';
import DepartureList from './DepartureList.jsx';

const Flights = () => {
  return (
    <table className="table">
      <FlightTable />
      <FlightList />
      {/*  <ArrivalList/>
            <DepartureList/>*/}
    </table>
  );
};

export default Flights;
