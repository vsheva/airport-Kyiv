import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

const ButtonDirection = () => {
  return (
    <div className="items">
      <button className="items__direction items__direction_active">
        <i className="fas fa-plane-departure"></i> <a>departures</a>
      </button>

      <button className="items__direction ">
        {' '}
        <i className="fas fa-plane-arrival"></i>
        <a> arrivals</a>
      </button>
    </div>
  );
};

export default ButtonDirection;

/*const ButtonDirection = () => {

    return (
        <div className="flights-nav">
            <a className="flights-nav__btn flights-nav__btn_selected" href="/departures?type=departures&amp;searchString=LO756">
                <i className="fas fa-plane-departure"></i>Departures</a>
            <a className="flights-nav__btn " href="/arrivals?type=arrivals&amp;searchString=LO756"> <i className='fas fa-plane-arrival'></i>Arrivals</a>
        </div>

    );
};*/
