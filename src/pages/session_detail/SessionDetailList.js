import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import SessionDetailTable from './SessionDetailTable';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';
import Loder from '../../components/Loder';


const SessionDetailList = () => {
    const [loder, setLoder] = useState(false);


    const loderHandler = (data) => {
        setLoder(data)

    }
    return (
        <>
            <Loder loder={loder} />
            <div className="page-wrapper doctris-theme toggled">
                <Sidebar />
                <main className="page-content bg-light">
                    <Header />
                    <div className="container-fluid">
                        <div className="layout-specing text-left">
                            <div className="row">
                                <div className="col-xl-9 col-lg-6 col-md-4">
                                    <h5 className="mb-0">My Sessions</h5>
                                </div>
                            </div>
                            {/* <AppointmentTable loderHandler={loderHandler} /> */}
                            <SessionDetailTable loderHandler={loderHandler}/>
                        </div>
                    </div>
                    <Footer />
                </main>
            </div>
        </>
    )
}

export default SessionDetailList;
