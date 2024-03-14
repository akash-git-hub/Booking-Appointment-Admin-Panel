import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';

import { Container } from 'react-bootstrap';

const MyCalendar = ({ apiData, onClick }) => {
    const [selectedDa, setSelectedDa] = useState();
    const abc = [];
    useEffect(() => {
        if (apiData && apiData.length > 0) {
            apiData.map((e) => {
                abc.push(moment.utc(e.utc_start_date_time).local().format('YYYY-MM-DD'));
            })
            setSelectedDa(abc);
        } else {
            setSelectedDa();
        }
    }, [apiData])

    const tileClassName = ({ date }) => {
        const formattedDate = moment(date).local().format('YYYY-MM-DD');
        if (selectedDa && selectedDa.some(selectedDa => selectedDa == formattedDate)) {
            return 'highlighted-date';
        } else { return null; }

    };
    return (
        <Container>
            <Calendar tileClassName={tileClassName} onChange={onClick} />
        </Container>
    );
};

export default MyCalendar;
