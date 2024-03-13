import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container } from 'react-bootstrap';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {


  return (
    <Container>
      <div style={{ height: 500 }}>
        <Calendar
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </Container>
  );
};

export default MyCalendar;
