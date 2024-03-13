import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import AppointmentTable from './BookingTable';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';


const BookingList = () => {
    return (
        <div>
            <>
                <div className="page-wrapper doctris-theme toggled">
                    {/* sidebar-wrapper */}
                    <Sidebar />
                    {/* sidebar-wrapper  */}
                    {/* sidebar-wrapper  */}
                    {/* Start Page Content */}
                    <main className="page-content bg-light">
                        <Header />
                        <div className="container-fluid">
                            <div className="layout-specing text-left">
                                <div className="row">
                                    <div className="col-xl-9 col-lg-6 col-md-4">
                                        <h5 className="mb-0">My Booking</h5>
                                    </div>
                                    {/*end col*/}
                                </div>
                                {/*end row*/}
                                <AppointmentTable />
                            </div>
                        </div>
                        {/*end container*/}
                        {/* Footer Start */}
                        <Footer />
                        {/*end footer*/}
                        {/* End */}
                    </main>
                    {/*End page-content" */}
                </div>
            </>

        </div>
    )
}

export default BookingList
