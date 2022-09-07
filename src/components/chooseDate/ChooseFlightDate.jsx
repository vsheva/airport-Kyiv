import React from "react";
import './chooseFlightDate.scss'

const ChooseFlightDate = () => {
 return <div className="dates">
     <input className="dates__input" type="date"/>
      <div className="dates__days">
         <div className="dates__day "><span className="dates__day-title">Tuesday 06/09</span><p>yesterday</p></div>
         <div className="dates__day "><span className="dates__day-title">Wednesday 07/09</span><p>today</p></div>
         <div className="dates__day "><span className="dates__day-title">Thursday 08/09</span><p>tomorrow</p></div>
     </div>
     <div className="dates__title">06-01-2022</div>
 </div>

}

export default ChooseFlightDate;