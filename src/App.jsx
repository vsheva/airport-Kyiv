import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Search from './components/Search.jsx';
import ButtonDirection from './components/ButtonDirection.jsx';
import ChooseFlightDate from './components/ChooseFlightDate.jsx';
import Flights from './components/Flights.jsx';
import { Provider } from 'react-redux';
import { store } from './store.js';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className="page">
          <Search />
          <ButtonDirection />
          <ChooseFlightDate />
          <Flights />
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
