import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal';

import { createEvent, fetchEventsList } from './gateway/Gataway.js';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const daysInWeek = 7;

  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [eventForm, isOpenModalForm] = useState(false);
  const [events, setEvents] = useState([]);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const swichNextWeek = () => {
    setWeekStartDate(
      new Date(
        weekStartDate.setDate(new Date(weekStartDate).getDate() + daysInWeek)
      )
    );
  };

  const swichPrevWeek = () => {
    setWeekStartDate(
      new Date(
        weekStartDate.setDate(new Date(weekStartDate).getDate() - daysInWeek)
      )
    );
  };

  const showEventForm = () => {
    isOpenModalForm(true);
  };

  const closeEventForm = () => {
    isOpenModalForm(false);
  };

  const showCurentWeek = () => {
    setWeekStartDate(new Date());
  };

  const getEventsList = () => {
    fetchEventsList()
      .then((eventsList) => {
        setEvents(eventsList);
      })
      .catch((error) => alert(error));
  };

  const handleSubmit = (event, eventData) => {
    event.preventDefault();
    console.log(event);

    const { title, date, startTime, endTime, description } = eventData;

    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };
    createEvent(newEvent).then(() => getEventsList());

    isOpenModalForm(false);
  };

  useEffect(() => {
    getEventsList();
  }, []);

  return (
    <>
      <Header
        showEventForm={showEventForm}
        swichNextWeek={swichNextWeek}
        swichPrevWeek={swichPrevWeek}
        showCurentWeek={showCurentWeek}
        weekStartDate={weekStartDate}
      />
      <Calendar
        weekDates={weekDates}
        events={events}
        getEventsList={getEventsList}
      />
      {eventForm && (
        <Modal handleSubmit={handleSubmit} closeEventForm={closeEventForm} />
      )}
    </>
  );
};

export default App;
