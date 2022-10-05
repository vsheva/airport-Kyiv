import React from 'react';
import './chooseDate.scss';
import moment from 'moment';
import qs from 'qs';

import { useDispatch} from 'react-redux';
import { getFlightData } from '../store/flightSlice';
import { useHistory } from 'react-router-dom';

const ChooseDate = () => {
  const [calendarDay, setCalendarDay] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useHistory();

  const { search } = window.location;
  const params = qs.parse(search.substring(1));

  const yesterday = moment().subtract(1, 'd');
  const today = moment();
  const tomorrow = moment().add(1, 'd');

  const dateHandler = data => {
    const formatedDay = moment(data).format('DD-MM-YYYY'); //11-01-2-22
    setCalendarDay(formatedDay);

    const queryString = qs.stringify({
      date: formatedDay,
    });

    navigate.push(`?${queryString}`);
    dispatch(getFlightData(formatedDay));
  };

  return (
    <div className="dates">
      <input
        onChange={e => dateHandler(e.target.value)}
        value={calendarDay}
        className="dates__input"
        type="date"
      />
      <div className="dates__days">
        <div
          onClick={() => dateHandler(yesterday)}
          className={
            calendarDay == yesterday.format('DD-MM-YYYY') ? 'dates__day active' : 'dates__day'
          }
        >
          <span className="dates__day-title">{yesterday.format('ddd DD/MM')}</span>
          <p>YESTERDAY</p>
        </div>

        <div
          onClick={() => dateHandler(today)}
          className={calendarDay == today.format('DD-MM-YYYY') ? 'dates__day active' : 'dates__day'}
        >
          <span className="dates__day-title">{today.format('ddd DD/MM')}</span>
          <p>TODAY</p>
        </div>

        <div
          onClick={() => dateHandler(tomorrow)}
          className={
            calendarDay == tomorrow.format('DD-MM-YYYY') ? 'dates__day active' : 'dates__day'
          }
        >
          <span className="dates__day-title">{tomorrow.format('ddd DD/MM')}</span>
          <p>TOMORROW</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseDate;
