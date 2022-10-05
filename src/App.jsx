import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header.jsx';
import Search from './components/Search.jsx';
import ButtonDirection from './components/ButtonDirection.jsx';
import ChooseDate from './components/ChooseDate.jsx';
import Flights from './components/Flights.jsx';
import { Provider } from 'react-redux';
import { store } from './store/store.js';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <main className="page">
          <Search />
          <ButtonDirection />
          <ChooseDate />
          <Flights />
        </main>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
