import React from 'react';
import './chooseDate.scss';
import moment from 'moment';

import {useDispatch, useSelector} from "react-redux";
import {getFlightData} from "../flightSlice";

const ChooseDate = () => {
  const [calendarDay, setCalendarDay]= React.useState('');
  const dispatch = useDispatch();

  const dateHandler=(e)=>{
    const formatedDay= (moment(e.target.value).format("DD-MM-YYYY"));
    setCalendarDay(formatedDay);
    console.log("formatedDay", formatedDay)
    dispatch(getFlightData(formatedDay))
  }


  const yesterday = moment().subtract(1, 'd').format('ddd DD/MM');
  const today= moment().format('ddd DD/MM');
  const tomorrow=moment().add(1, 'd').format('ddd DD/MM');


  return (
    <div className="dates">
      <input onInput={(e)=>dateHandler(e)}   value={calendarDay} className="dates__input" type="date" />
      <div className="dates__days">
        <div className="dates__day ">
          <span className="dates__day-title">{yesterday}</span>
          <p>yesterday</p>
        </div>
        <div className="dates__day ">
          <span className="dates__day-title">{today}</span>
          <p>today</p>
        </div>
        <div className="dates__day ">
          <span className="dates__day-title">{tomorrow}</span>
          <p>tomorrow</p>
        </div>
      </div>
      {/*<div className="dates__title">06-01-2022</div>*/}
    </div>
  );
};

export default ChooseDate;




/**
import React from 'react';
import './chooseDate.scss';

const ChooseDate = () => {
  return (
      <div className="dates">
        <input className="dates__input" type="date" />
        <div className="dates__days">
          <div className="dates__day ">
            <span className="dates__day-title">Tuesday 06/09</span>
            <p>yesterday</p>
          </div>
          <div className="dates__day ">
            <span className="dates__day-title">Wednesday 07/09</span>
            <p>today</p>
          </div>
          <div className="dates__day ">
            <span className="dates__day-title">Thursday 08/09</span>
            <p>tomorrow</p>
          </div>
        </div>
        {/!*<div className="dates__title">06-01-2022</div>*!/}
      </div>
  );
};

export default ChooseDate;
*/
