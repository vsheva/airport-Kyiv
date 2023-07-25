import React from 'react';
import FlightTable from './FlightTable.jsx';
import DepartureList from './DepartureList.jsx';
import ArrivalList from './ArrivalList.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';

const Flights = () => {
  return (
    <table className="table">
      <FlightTable />
      <Switch>
        {/*<Route exact path="/">*/}
        {/*  <Redirect to="/departures" />*/}
        {/*</Route>*/}

        <Route path="/departures">
          <DepartureList />
        </Route>

        <Route path="/arrivals">
          <ArrivalList />
        </Route>
      </Switch>
    </table>
  );
};

export default Flights;

