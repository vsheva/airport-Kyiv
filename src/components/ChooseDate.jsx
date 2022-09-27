import React from 'react';
import './chooseDate.scss';
import moment from 'moment';

import {useDispatch, useSelector} from "react-redux";
import {getFlightData} from "../flightSlice";

const ChooseDate = () => {
  const [calendarDay, setCalendarDay]= React.useState('');
  const dispatch = useDispatch();

  //const yesterday = moment().subtract(1, 'd').format('ddd DD/MM');
  const yesterday = moment().subtract(1, 'd')
  const today= moment()
  const tomorrow=moment().add(1, 'd')

  const dateHandler=(data)=>{
    const formatedDay= (moment(data).format("DD-MM-YYYY"));
    setCalendarDay(formatedDay);
    console.log("formatedDay", formatedDay) //11-01-2-22
    dispatch(getFlightData(formatedDay))
  }

  const days=[yesterday, today, tomorrow]

  console.log("days", days)

  return (
      <div className="dates">
        <input onInput={(e)=>dateHandler(e.target.value)}   value={calendarDay} className="dates__input" type="date" />
        <div className="dates__days">

          <div onClick={()=>dateHandler(yesterday)} className={calendarDay == yesterday.format("DD-MM-YYYY") ? 'dates__day active' : 'dates__day'}>
            <span className="dates__day-title">{yesterday.format('ddd DD/MM')}</span>
            <p>YESTERDAY</p>
          </div>

          <div onClick={()=>dateHandler(today)} className={calendarDay == today.format("DD-MM-YYYY") ? 'dates__day active' : 'dates__day'}>
            <span className="dates__day-title">{today.format('ddd DD/MM')}</span>
            <p>TODAY</p>
          </div>

          <div onClick={()=>dateHandler(tomorrow)} className={calendarDay == tomorrow.format("DD-MM-YYYY") ? 'dates__day active' : 'dates__day'}>
            <span className="dates__day-title">{tomorrow.format('ddd DD/MM')}</span>
            <p>TOMORROW</p>
          </div>

        </div>
      </div>
  );
};

export default ChooseDate;





/**
import React from 'react';
import './chooseDate.scss';
import moment from 'moment';

import {useDispatch, useSelector} from "react-redux";
import {getFlightData} from "../flightSlice";

const ChooseDate = () => {
  const [calendarDay, setCalendarDay]= React.useState('');
  const dispatch = useDispatch();

  const yesterday = moment().subtract(1, 'd').format('ddd DD/MM');
  const today= moment().format('ddd DD/MM');
  const tomorrow=moment().add(1, 'd').format('ddd DD/MM');

  const dateHandler=(date)=>{
    const formatedDay= (moment(date).format("DD-MM-YYYY"));
    setCalendarDay(formatedDay);
    console.log("formatedDay", formatedDay) //11-01-2-22
    dispatch(getFlightData(formatedDay))
  }

  const days=[yesterday, today, tomorrow]

  console.log("days", days)

  return (
    <div className="dates">
      <input onInput={(e)=>dateHandler(e.target.value)}   value={calendarDay} className="dates__input" type="date" />
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
    </div>
  );
};

export default ChooseDate;


*/


/*
import React from 'react';
import './chooseDate.scss';
import moment from 'moment';

import {useDispatch, useSelector} from "react-redux";
import {getFlightData} from "../flightSlice";

const ChooseDate = () => {
  const [calendarDay, setCalendarDay]= React.useState('');
  const dispatch = useDispatch();

  const yesterday = moment().subtract(1, 'd')
  const today= moment()
  const tomorrow=moment().add(1, 'd')

  const dateHandler=(data)=>{
    const formatedDay= (moment(data).format("DD-MM-YYYY"));
    setCalendarDay(formatedDay);
    console.log("formatedDay", formatedDay) //11-01-2-22
    dispatch(getFlightData(formatedDay))
  }


  const classes = (date) =>{
    console.log("date", date)
    return `dates__day ${calendarDay === date.format('DD-MM-YYYY') ? 'dates__day active' : ''}`;
  }





  return (
      <div className="dates">
        <input onInput={(e)=>dateHandler(e.target.value)}   value={calendarDay} className="dates__input" type="date" />
        <div className="dates__days">

          <div  onClick={(e)=>dateHandler(yesterday) }  className={classes(yesterday)}>
            <span className="dates__day-title">{yesterday.format('DD/MM')}</span>
            <p>yesterday</p>
          </div>

          <div  onClick={() => dateHandler(today)} className={classes(today)}>
            <span className="dates__day-title">{today.format('DD/MM')}</span>
            <p>today</p>
          </div>

          <div onClick={() => dateHandler(tomorrow)} className={classes(tomorrow)}>
            <span className="dates__day-title">{tomorrow.format('DD/MM')}</span>
            <p>tomorrow</p>
          </div>


        </div>
      </div>
  );
};

export default ChooseDate;
*/








