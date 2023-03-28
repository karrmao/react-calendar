import React from 'react';
import moment from 'moment';
import './header.scss';

const Header = ({
  showEventForm,
  swichNextWeek,
  swichPrevWeek,
  showCurentWeek,
  weekStartDate,
}) => {
  const currentMonth = moment(weekStartDate).format('MMM');
  const nextMonth = moment(weekStartDate).add(1, 'month').format('MMM');

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={showEventForm}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          className="navigation__today-btn button"
          onClick={showCurentWeek}
        >
          Today
        </button>
        <button
          className="icon-button navigation__nav-icon"
          onClick={swichPrevWeek}
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          className="icon-button navigation__nav-icon "
          onClick={swichNextWeek}
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">
          {weekStartDate.getDate() > 25
            ? `${currentMonth} - ${nextMonth}`
            : currentMonth}
        </span>
      </div>
    </header>
  );
};

export default Header;
