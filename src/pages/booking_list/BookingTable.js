import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination';
import { getMyBookings } from "../../networking/NetworkCall"
import Loader from '../../components/Loader';
import moment from 'moment';
import 'moment-timezone';

const BookingTable = () => {
    const [loading, setLoading] = useState(true);
    const [myBookings, setMyBookings] = useState([]);


    const formatTimeSlot = (utc_start_date_time, utc_end_date_time) => {
        // Parse the UTC start and end times using Moment.js
        const startMoment = moment.utc(utc_start_date_time).local();
        const endMoment = moment.utc(utc_end_date_time).local();

        // Format the date in "20th Dec 2024" format
        const formattedDate = startMoment.format('Do MMM YYYY');

        // Format the start and end times in "11:00AM To 12:00PM" format
        const formattedStartTime = startMoment.format('h:mmA');
        const formattedEndTime = endMoment.format('h:mmA');

        // Combine the formatted date and time into a time slot string
        const timeSlot = {
            date: formattedDate,
            Slot: `${formattedStartTime} To ${formattedEndTime}`
        };

        return timeSlot;
    };


    useEffect(() => {
        setLoading(true);
        const getData = async () => {
            const res = await getMyBookings();
            if (res.success) {
                setMyBookings(res.data);
                // setTotalNumberOfPages(res.totalNumberOfPages);
            }
            setLoading(false);
        };
        getData();
    }, []);

    return (
        <>
            {loading ? <Loader /> : <>
                <div className="row">
                    <div className="col-12 mt-4">
                        <div className="table-responsive bg-white shadow rounded">
                            <table className="table mb-0 table-center">
                                <thead>
                                    <tr>
                                        <th
                                            className="border-bottom p-3"
                                            style={{ minWidth: 50 }}
                                        >
                                            Booking Id
                                        </th>
                                        <th
                                            className="border-bottom p-3"
                                            style={{ minWidth: 150 }}
                                        >
                                            Date
                                        </th>
                                        <th className="border-bottom p-3">Slot</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myBookings.map((row, index) => {
                                        const timeSlot = formatTimeSlot(row.slot.utc_start_date_time, row.slot.utc_end_date_time);
                                        return (
                                            <tr key={index}>
                                                <th className="p-3">{row.unique_booking_id}</th>
                                                <td className="p-3">{timeSlot.date}</td>
                                                <td className="p-3">{timeSlot.Slot}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    {/* PAGINATION START */}
                    {/* <Pagination /> */}
                    {/*end col*/}
                    {/* PAGINATION END */}
                </div>

            </>}

        </>
    )
}

export default BookingTable;
