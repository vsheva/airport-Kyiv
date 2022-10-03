import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ButtonDirection = () => {
  const location = useLocation();
  const queryString = location.search || '';

  const [selected, changeSelected] = useState(true);

  const buttons = selected ? (
    <>
      <Link to={`/departures${queryString}`}>
        <button className="items__direction  items__direction_active">
          <i className="fas fa-plane-departure "></i>
          departures
        </button>
      </Link>

      <Link to={`/arrivals${queryString}`}>
        <button className="items__direction" onClick={() => changeSelected(false)}>
          <i className="fas fa-plane-arrival"></i>
          arrivals
        </button>
      </Link>
    </>
  ) : (
    <>
      <Link to={`/departures${queryString}`}>
        <button className="items__direction" onClick={() => changeSelected(true)}>
          <i className="fas fa-plane-departure "></i>
          departures
        </button>
      </Link>

      <Link to={`/arrivals${queryString}`}>
        <button className="items__direction  items__direction_active">
          <i className="fas fa-plane-arrival"></i>
          arrivals
        </button>
      </Link>
    </>
  );

  return <div className="items">{buttons}</div>;
};

export default ButtonDirection;

//OPTION 2
/*
import React from 'react';
import { Link, useLocation} from 'react-router-dom';

const ButtonDirection = () => {
    const location = useLocation();

    const isActiveDeparture= location.pathname.includes('/departures')
        ? "items__direction  items__direction_active"
        : "items__direction";

    const isActiveArrival = location.pathname.includes('/arrivals')
        ? "items__direction  items__direction_active"
        : "items__direction";

    return (
        <div className="items">
            <Link to='/departures'>
                <button className={isActiveDeparture}>
                    <i className="fas fa-plane-departure "></i> <a>departures</a>
                </button>
            </Link>

            <Link to='/arrivals'>
                <button className={isActiveArrival}>
                    <i className="fas fa-plane-arrival"></i>
                    <a> arrivals</a>
                </button>
            </Link>

        </div>
    );
};

export default ButtonDirection;*/

/**
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const ButtonDirection = () => {
    return (
        <div className="items">
            <button className="items__direction ">
                <i className="fas fa-plane-departure items__direction_active"></i> <a>departures</a>
            </button>

            <button className="items__direction  items__direction_active">
                <i className="fas fa-plane-arrival"></i>
                <a> arrivals</a>
            </button>
        </div>
    );
};

export default ButtonDirection;
*/
