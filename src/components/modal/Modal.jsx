import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';

const Modal = ({ closeEventForm, handleSubmit }) => {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
  });

  const { title, date, startTime, endTime, description } = eventData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };
  console.log(event);
  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={closeEventForm}>
            +
          </button>
          <form
            className="event-form"
            onSubmit={(e) => handleSubmit(e, eventData)}
          >
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  closeEventForm: PropTypes.func.isRequired,
};

export default Modal;
