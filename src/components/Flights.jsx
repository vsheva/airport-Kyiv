import React, { useEffect } from 'react';
import FlightTable from './FlightTable.jsx';
import DepartureList from './DepartureList.jsx';
import ArrivalList from "./ArrivalList.jsx";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Flights = () => {
  return (
    <table className="table">
      <FlightTable />
        <Switch>
            <Route exact path="/arrivals">
                <ArrivalList/>
            </Route>
            <Route path="/departures">
                <DepartureList />
            </Route>
        </Switch>
    </table>
  );
};

export default Flights;
