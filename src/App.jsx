import React from 'react';
import Header from './components/header/Header.jsx'
import FlightSearch from "./components/flightSearch/FlightSearch.jsx";
import ButtonDirection from "./components/buttonDirection/ButtonDirection.jsx";
import ChooseFlightDate from "./components/chooseDate/ChooseFlightDate.jsx";
import TableFlight from "./components/tableFlight/TableFlight.jsx";



const App =()=>{

    return (
        <div>
        <Header/>
        <main className="page">
            <FlightSearch/>
            <ButtonDirection/>
            <ChooseFlightDate/>
            <TableFlight/>
        </main>


        </div>
    );
}

export default App;




