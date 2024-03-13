import React from 'react'
import { Link } from 'react-router-dom'
import MyCalendar from './MyCalender'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Slots from './Slots'
import Footer from '../../components/Footer'

const Calendar = () => {
    return (
        <>
            <div className="page-wrapper doctris-theme toggled">
                <Sidebar />
                <main className="page-content bg-light">
                    <Header />
                    <div className="container-fluid">
                        <div className="layout-specing">
                            <div className="text-left">
                                <h5 className="mb-0">Calendar</h5>
                            </div>
                            <div className="row">
                                {/* <div className="col-xl-9 col-lg-8 col-12 mt-4">
                                    <div id="calendar-container" className="card rounded border-0 shadow p-4">
                                        <MyCalendar />
                                    </div>
                                </div> */}
                                {/* <div className="col-xl-3 col-lg-4 col-12 mt-4">
                                    <Slots />
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* <Footer /> */}
                </main>
            </div>
        </>
    )
}

export default Calendar
