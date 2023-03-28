import React from 'react';
import Hour from '../hour/Hour';
import PropTypes from 'prop-types';
import { hours } from '../../utils/dateUtils.js';

import './day.scss';

const Day = ({ dataDay, dayEvents, getEventsList }) => {
  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map((hour) => {
        const hourEvents = dayEvents.filter(
          (event) => new Date(event.dateFrom).getHours() === hour
        );

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            dataDay={dataDay}
            getEventsList={getEventsList}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
  getEventsList: PropTypes.func.isRequired,
};

export default Day;
