import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MyCalendar from './MyCalender'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Slots from './Slots'
import Footer from '../../components/Footer'
import { getSlotsDate, getSlotsByDate, bookSlot } from '../../networking/NetworkCall'
import moment from 'moment'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Swal from 'sweetalert2'
import { Spinner } from 'react-bootstrap'
import Loder from '../../components/Loder'

const Calendar = () => {
    const [preData, setPreData] = useState([]);
    const [slote, setSlote] = useState([]);
    const [slotid, setSlotid] = useState('');
    const [sldate, setSldate] = useState();
    const [loder, setLoder] = useState(false);


    const getpredata = async () => {
        setLoder(true);
        const resp = await getSlotsDate();
        let abc = [];
        if (resp.success) { abc = resp.data; }
        setPreData(abc);
        setLoder(false);
    }

    useEffect(() => { getpredata(); }, []);

    const onClickHandler = async (e) => {
        setSldate(e);
        const currentTimezone = moment.tz.guess();
        const localTime = moment.tz(e, 'ddd MMM DD YYYY HH:mm:ss ZZ', currentTimezone);
        const outDate = localTime.format('YYYY-MM-DD');
        setLoder(true);
        const resp = await getSlotsByDate(outDate);
        let abcd = [];
        if (resp.success) { setLoder(false); abcd = resp.data; }
        setSlote(abcd)
        setLoder(false);
    }

    const sloteonClick = async (e) => {
        if (e.isBooked == 1) { toast.error("Slot Already booked "); return; };
        setSlotid(e.id);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to book this slot!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm !"
        }).then(async (result) => {
            if (result.isConfirmed) {
                setLoder(true);
                const fdata = { "slot_id": e.id }
                const resp = await bookSlot(fdata);
                if (resp.success) {
                    setLoder(false);
                    const ids = resp.data.unique_booking_id;
                    Swal.fire({
                        title: 'Booking Code',
                        text: ids,
                        confirmButtonText: "Copy !"
                    }).then(async (result) => {
                        if (result.isConfirmed) {
                            setSlotid('');
                            onClickHandler(sldate);
                            const el = document.createElement('textarea');
                            el.value = ids;
                            document.body.appendChild(el);
                            el.select();
                            document.execCommand('copy');
                            document.body.removeChild(el);
                            toast.success("Copy Success ");
                        }
                    })
                }
                setLoder(false);
            }
        });
    }


    return (
        <>
            <Loder loder={loder} />
            <ToastContainer />
            <div className="page-wrapper doctris-theme toggled">
                <Sidebar />
                <main className="page-content bg-light">
                    <Header />
                    <div className="container-fluid">
                        <div className="layout-specing">
                            <div className="text-left">
                                <h5 className="mb-0">Book Your Slot</h5>
                            </div>
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-12 mt-4">
                                    <div id="calendar-container" className="card rounded border-0 shadow p-4">
                                        <MyCalendar apiData={preData} onClick={onClickHandler} />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-12 mt-4">
                                    <Slots myslote={slote} onClick={sloteonClick} slotid={slotid} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    )
}

export default Calendar
