import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <nav id="sidebar" className="sidebar-wrapper">
                <div
                    className="sidebar-content"
                    data-simplebar=""
                    style={{ height: "calc(100% - 60px)" }}
                >
                    <div className="sidebar-brand">
                        <Link to="index.html">
                            <img
                                src="../assets/images/logo-dark.png"
                                height={22}
                                className="logo-light-mode"
                                alt=""
                            />
                            <img
                                src="../assets/images/logo-light.png"
                                height={22}
                                className="logo-dark-mode"
                                alt=""
                            />
                            <span className="sidebar-colored">
                                <img src="../assets/images/logo-light.png" height={22} alt="" />
                            </span>
                        </Link>
                    </div>
                    <ul className="sidebar-menu">
                        {/* <li><Link to="index.html"><i class="bi bi-speedometer"></i>Dashboard</Link></li> */}
                        <li>
                            <Link to="/calendar">
                                <i className="bi bi-calendar-date" />
                                Calendar
                            </Link>
                        </li>
                        <li className='ms-0 active'>
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
