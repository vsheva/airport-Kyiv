import React from 'react';
import './buttonDirection.scss'


const ButtonDirection = () => {

    return (
        <div>
            <button className="button-direction active"><i className="fas fa-plane-departure"></i> departure</button>
            <button className="button-direction "> <i className='fas fa-plane-arrival'></i> arrival</button>
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