import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination';
import { getMySessionsDetail } from "../../networking/NetworkCall"
import Loader from '../../components/Loader';
// import moment from 'moment';
import moment from 'moment-timezone';
import ImgModal from '../../components/ImgModel';
import Button from 'react-bootstrap/Button';
import DialogModal from '../../components/DialogModal';


const SessionDetailTable = ({ loderHandler }) => {
    const [loading, setLoading] = useState(true);
    const [mySessions, setMySessions] = useState([]);
    const [ttpage, setTtpage] = useState(0);
    const [crpage, setcrpage] = useState(1);
    const limit = 15

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

    const getMySessionsHandler = async (page, limit) => {
        let pg = '';
        if (page) { pg = page } else { pg = crpage }
        loderHandler(true);
        const res = await getMySessionsDetail(pg, limit);

        if (res.success) {
            setMySessions(res.data);
            setTtpage(res.totalNumberOfPages);
        }
        loderHandler(false);
    }

    useEffect(() => { getMySessionsHandler(crpage, limit); }, []);
    const pageHandler = (e) => { setcrpage(e); getMySessionsHandler(e, limit); }

    return (
        <>
            <div className="row">
                <div className="col-12 mt-4">
                    <div className="table-responsive bg-white shadow p-4">
                        <table className="table mb-0 table-center">
                            <thead>
                                <tr>
                                    <th className="th-sm">S NO</th>
                                    <th className="th-sm">Patient Name</th>
                                    <th className="th-sm">Slot Date/Time</th>
                                    <th className="th-sm">Prescription</th>
                                    <th className="th-sm">Notes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mySessions && mySessions.length > 0 ? (
                                    mySessions.map((row, index) => {
                                        const timeSlot = formatTimeSlot(row?.slot.utc_start_date_time, row?.slot.utc_end_date_time);
                                        return (
                                            <tr key={index}>
                                                <td>{(crpage - 1) * limit + index + 1}</td>
                                                <td>{row?.patient?.first_name} {row?.patient?.last_name}</td>
                                                <td>{timeSlot.date} <p><b> {timeSlot.Slot}</b></p></td>
                                                <td style={{ cursor: 'pointer' }}>
                                                    <ImgModal image={row?.prescription_file} ModalImgId={row.id} />
                                                </td>
                                                <td>
                                                    <DialogModal notes={row?.notes} id={row?.id} />
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="text-center dataNotFound"><b>Data not found</b></td>
                                    </tr>
                                )}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {mySessions && mySessions.length > 0 &&
                <div className="row text-center">
                    <Pagination onClick={pageHandler} totalpg={ttpage} crpage={crpage} />
                </div>
            }
        </>
    )
}

export default SessionDetailTable;
