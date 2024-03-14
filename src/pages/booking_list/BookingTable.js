import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination';
import { getMyBookings } from "../../networking/NetworkCall"
import Loader from '../../components/Loader';
// import moment from 'moment';
import moment from 'moment-timezone';


const BookingTable = ({loderHandler}) => {
    // const [loading, setLoading] = useState(true);
    const [myBookings, setMyBookings] = useState([]);

    const [ttpage, setTtpage] = useState(0);
    const [crpage, setcrpage] = useState(1);

    const formatTimeSlot = (utc_start_date_time, utc_end_date_time) => {
        const startMoment = moment.utc(utc_start_date_time).local();
        const endMoment = moment.utc(utc_end_date_time).local();
        const formattedDate = startMoment.format('Do MMM YYYY');
        const formattedStartTime = startMoment.format('h:mmA');
        const formattedEndTime = endMoment.format('h:mmA');
        const timeSlot = {
            date: formattedDate,
            Slot: `${formattedStartTime} To ${formattedEndTime}`
        };

        return timeSlot;
    };

    const getmybookingHandler = async (page) => {
        let pg = '';
        if (page) { pg = page } else { pg = crpage }
        loderHandler(true);
        const res = await getMyBookings(pg);
        if (res.success) {
            setMyBookings(res.data);
            setTtpage(res.totalNumberOfPages);
        }
        loderHandler(false);
    }

    useEffect(() => { getmybookingHandler(); }, []);
    const pageHandler = (e) => { setcrpage(e); getmybookingHandler(e); }

    return (
        <>
            <div className="row">
                <div className="col-12 mt-4">
                    <div className="table-responsive bg-white shadow p-4">
                        <table className="table mb-0 table-center">
                            <thead>
                                <tr>
                                    <th  className="border-bottom p-3"  style={{ minWidth: 50 }} > Booking Code </th>
                                    <th  className="border-bottom p-3" style={{ minWidth: 150 }} >Slot Date </th>
                                    <th className="border-bottom p-3">Slot Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myBookings && myBookings.length > 0 ? (
                                    myBookings.map((row, index) => {
                                        const timeSlot = formatTimeSlot(row.slot.utc_start_date_time, row.slot.utc_end_date_time);
                                        return (
                                            <tr key={index}>
                                                <th className="p-3">{row.unique_booking_id}</th>
                                                <td className="p-3">{timeSlot.date}</td>
                                                <td className="p-3">{timeSlot.Slot}</td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="text-center">Data not found</td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {myBookings && myBookings.length > 0 &&
                <div className="row text-center">
                    <Pagination onClick={pageHandler} totalpg={ttpage} crpage={crpage} />
                </div>
            }
        </>
    )
}

export default BookingTable;
