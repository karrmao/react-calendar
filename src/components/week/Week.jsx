import React from 'react';
import PropTypes from 'prop-types';
import Day from '../day/Day';

import './week.scss';

const Week = ({ weekDates, events, getEventsList }) => {
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );

        const dayEvents = events.filter(
          (event) =>
            new Date(event.dateFrom) > new Date(dayStart) &&
            new Date(event.dateTo) < new Date(dayEnd)
        );

        return (
          <Day
            key={dayStart.getDate()}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            getEventsList={getEventsList}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  getEventsList: PropTypes.func.isRequired,
};

export default Week;
