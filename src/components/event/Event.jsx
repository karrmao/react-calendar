import React from 'react';
import { deleteEvent } from '../../gateway/Gataway';
import './event.scss';

const Event = ({ height, marginTop, title, time, id, getEventsList }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const onDeleteEvent = (id) => deleteEvent(id).then(() => getEventsList());

  return (
    <div style={eventStyle} className="event">
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      <button onClick={() => onDeleteEvent(id)} className="event__delete-btn">
        <i className="fas fa-sharp fa-solid fa-trash"></i>
      </button>
    </div>
  );
};

export default Event;
