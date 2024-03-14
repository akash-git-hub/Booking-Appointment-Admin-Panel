import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {
    const path = useLocation().pathname;
    return (
        <>
            <nav id="sidebar" className="sidebar-wrapper">
                <div
                    className="sidebar-content"
                    data-simplebar=""
                    style={{ height: "calc(100% - 60px)" }}
                >
                    <div className="sidebar-brand">
                        <Link to="/calendar" style={{width:'100%',height:'100%'}}>
                            <img style={{objectFit:' scale-down'}}
                                src="/doctor/assets/images/logo-dark.png"
                                className="logo-light-mode w-100"
                                alt=""
                            />
                            {/* <img
                                src="../assets/images/logo-light.png"
                                height={22}
                                className="logo-dark-mode"
                                alt=""
                            /> */}
                            {/* <span className="sidebar-colored">
                                <img src="../assets/images/logo-light.png" height={22} alt="" />
                            </span> */}
                        </Link>
                    </div>
                    <ul className="sidebar-menu">
                        {/* <li><Link to="index.html"><i class="bi bi-speedometer"></i>Dashboard</Link></li> */}
                        <li className={path=='/calendar' ? 'ms-0 active' :'ms-0'}>
                            <Link to="/calendar">
                                <i className="bi bi-calendar-date" />
                                Slot Booking
                            </Link>
                        </li>
                        <li className={path=='/booking-list' ? 'ms-0 active' :'ms-0'}>
                            <Link to="/booking-list">
                                <i className="bi bi-people" />
                                My Bookings
                            </Link>
                        </li>
                    </ul>
                    {/* sidebar-menu  */}
                </div>
            </nav>
        </>
    )
}

export default Sidebar
