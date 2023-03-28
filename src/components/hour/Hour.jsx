import React from 'react';

import PropTypes from 'prop-types';
import Event from '../event/Event';
import { formatMins } from '../../../src/utils/dateUtils.js';
import RedLine from '../redLine/RedLine';

const Hour = ({ dataHour, hourEvents, dataDay, getEventsList }) => {
  const curentData = new Date().getDate();
  const curentHour = new Date().getHours();

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {curentHour === dataHour && curentData === dataDay && <RedLine />}

      {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
        const eventStart = `${new Date(dateFrom).getHours()}:${formatMins(
          new Date(dateFrom).getMinutes()
        )}`;
        const eventEnd = `${new Date(dateTo).getHours()}:${formatMins(
          new Date(dateTo).getMinutes()
        )}`;
        const eventStartX = dateFrom.getHours;

        console.log(eventStart);
        console.log(eventStartX);
        return (
          <Event
            id={id}
            key={id}
            height={
              (new Date(dateTo).getTime() - new Date(dateFrom).getTime()) /
              (1000 * 60)
            }
            marginTop={new Date(dateFrom).getMinutes()}
            time={`${eventStart} - ${eventEnd}`}
            title={title}
            getEventsList={getEventsList}
          />
        );
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  getEventsList: PropTypes.func.isRequired,
  dataDay: PropTypes.number.isRequired,
};

export default Hour;
