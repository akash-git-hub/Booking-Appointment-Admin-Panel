import React from 'react'
import { Link } from 'react-router-dom'
import MyCalendar from './MyCalendar'
import { Button } from 'react-bootstrap'



const calendar = () => {
    const toggleSidebar = () => {
        document.getElementById("sidebar").classList.toggle("toggled");
        document.querySelector(".page-wrapper").classList.toggle("toggled");
    };

    
    return (
        <>
            <div className="page-wrapper doctris-theme toggled">
                {/* sidebar-wrapper */}
                <nav id="sidebar" className="sidebar-wrapper">
                    <div className="sidebar-content" data-simplebar="" style={{ height: "calc(100% - 60px)" }}>
                        <div className="sidebar-brand">
                            <Link to="index.html">
                                <img src="../assets/images/logo-dark.png" height={22} className="logo-light-mode" alt="" />
                                <img src="../assets/images/logo-light.png" height={22} className="logo-dark-mode" alt="" />
                                <span className="sidebar-colored">
                                    <img src="../assets/images/logo-light.png" height={22} alt="" />
                                </span>
                            </Link>
                        </div>
                        <ul className="sidebar-menu">
                            {/* <li><Link to="index.html"><i class="bi bi-speedometer"></i>Dashboard</Link></li> */}
                            <li className='ms-0 active'>
                                <Link to="/calendar">
                                    <i className="bi bi-calendar-date" />
                                    Calendar
                                </Link>
                            </li>
                            <li>
                                <Link to="/appointment">
                                    <i className="bi bi-people" />
                                    Appointment
                                </Link>
                            </li>

                        </ul>
                        {/* sidebar-menu  */}
                    </div>
                </nav>
                {/* sidebar-wrapper  */}
                {/* Start Page Content */}
                <main className="page-content bg-light">
                    <div className="top-header">
                        <div className="header-bar d-flex justify-content-between border-bottom">
                            <div className="d-flex align-items-center">
                                <Link to="#" className="logo-icon">
                                    <img src="../assets/images/logo-icon.png" height={30} className="small" alt="" />
                                    <span className="big">
                                        <img src="../assets/images/logo-dark.png" height={22} className="logo-light-mode" alt="" />
                                        <img src="../assets/images/logo-light.png" height={22} className="logo-dark-mode" alt="" />
                                    </span>
                                </Link>
                                <Link id="close-sidebar" className="btn btn-icon btn-pills btn-soft-primary ms-2" to="#"   onClick={toggleSidebar}>
                                    <i className="bi bi-list" />
                                </Link>
                                <div className="search-bar p-0 d-none d-lg-block ms-2">
                                    <div id="search" className="menu-search mb-0">
                                        <form role="search" method="get" id="searchform" className="searchform">
                                            <div>
                                                <input type="text" className="form-control border rounded-pill" name="s" id="s" placeholder="Search Keywords..." />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-unstyled mb-0">
                                <li className="list-inline-item mb-0 ms-1">
                                    <Link to="/" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                        <div className="btn btn-icon btn-pills btn-soft-primary">
                                            <i className="bi bi-box-arrow-right" />
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="layout-specing">
                            <div className="text-left">
                                <h5 className="mb-0">Calendar</h5>
                                <nav aria-label="breadcrumb" className="d-inline-block mt-4 mt-sm-0">
                                    <ul className="breadcrumb bg-transparent rounded mb-0 p-0">
                                        <li className="breadcrumb-item">
                                            <Link to="index.html">Doctris</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">
                                            Calendar
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="row">
                                {/*end col*/}
                                <div className="col-xl-9 col-lg-8 col-12 mt-4">
                                    <div id="calendar-container" className="card rounded border-0 shadow p-4">
                                        <MyCalendar />
                                    </div>
                                </div>
                                {/*end col*/}
                                <div className="col-xl-3 col-lg-4 col-12 mt-4">
                                    <div id="external-events">
                                        <div className="card border-0 p-2 shadow rounded">
                                            <span className="h6">Available Slots</span>
                                            <div className="d-grid fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event text-center">
                                                <div className="fc-event-main">10:00AM To 11:00AM</div>
                                                <Button size='small' className='slotBtn' variant='danger' type="submit">Booked</Button>
                                            </div>
                                            <div className="d-flex fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event text-center">
                                            </div>
                                            <div className="d-grid fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event text-center">
                                                <div className="fc-event-main">02:00PM To 03:00AM</div>
                                                <Button size='small' className='slotBtn' variant='success' type="submit">Booking</Button>
                                            </div>
                                            <div className="d-grid fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event text-center">
                                                <div className="fc-event-main">04:00AM To 05:00AM</div>
                                                <Button size='small' className='slotBtn' variant='success' type="submit">Booking</Button>
                                            </div>
                                            <div className="d-grid fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event text-center">
                                                <div className="fc-event-main">07:00AM To 08:00AM</div>
                                                <Button size='small' className='slotBtn' variant='success' type="submit">Booking</Button>
                                            </div>
                                            <div className="d-grid fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event text-center">
                                                <div className="fc-event-main">08:30AM To 09:30AM</div>
                                                <Button size='small' className='slotBtn' variant='danger' type="submit">Booked</Button>
                                            </div>
                                            <div className="mt-2">
                                                <div className="d-grid">
                                                    <Link to="#" className="btn btn-primary">
                                                        Booking
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*end row*/}
                        </div>
                    </div>
                    {/*end container*/}
                    {/* Footer Start */}
                    <footer className="bg-footer-color shadow py-3">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col">
                                    <div className="text-sm-start text-center">
                                        <p className="mb-0 text-muted">
                                            <i className="mdi mdi-heart text-danger" /> by{" "}
                                            <Link to="https://futurristic.com/" target="_blank" className="text-reset">
                                                Futurristic
                                            </Link>
                                            .
                                        </p>
                                    </div>
                                </div>
                                {/*end col*/}
                            </div>
                            {/*end row*/}
                        </div>
                        {/*end container*/}
                    </footer>
                    {/*end footer*/}
                    {/* End */}
                </main>
                {/*End page-content" */}
            </div>
            {/* page-wrapper */}
            {/* Offcanvas Start */}
            <div className="offcanvas offcanvas-end shadow border-0" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header p-4 border-bottom">
                    <h5 id="offcanvasRightLabel" className="mb-0">
                        <img src="../assets/images/logo-dark.png" height={22} className="light-version" alt="" />
                        <img src="../assets/images/logo-light.png" height={22} className="dark-version" alt="" />
                    </h5>
                    <button type="button" className="btn-close d-flex align-items-center text-dark" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i className="uil uil-times fs-4" />
                    </button>
                </div>
                <div className="offcanvas-body p-4 px-md-5">
                    <div className="row">
                        <div className="col-12">
                            {/* Style switcher */}
                            <div id="style-switcher">
                                <div>
                                    <ul className="text-center style-switcher list-unstyled mb-0">
                                        <li className="d-grid">
                                            <Link to="/" className="rtl-version t-rtl-light" onclick="setTheme('style-rtl')">
                                                <img src="../assets/images/layouts/light-dash-rtl.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{ width: 240 }} alt="" />
                                                <span className="text-dark fw-medium mt-3 d-block">
                                                    RTL Version
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="d-grid">
                                            <Link to="/" className="ltr-version t-ltr-light" onclick="setTheme('style')">
                                                <img src="../assets/images/layouts/light-dash.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{ width: 240 }} alt="" />
                                                <span className="text-dark fw-medium mt-3 d-block">
                                                    LTR Version
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="d-grid">
                                            <Link to="/" className="dark-rtl-version t-rtl-dark" onclick="setTheme('style-dark-rtl')">
                                                <img src="../assets/images/layouts/dark-dash-rtl.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{ width: 240 }} alt="" />
                                                <span className="text-dark fw-medium mt-3 d-block">
                                                    RTL Version
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="d-grid">
                                            <Link to="/" className="dark-ltr-version t-ltr-dark" onclick="setTheme('style-dark')">
                                                <img src="../assets/images/layouts/dark-dash.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{ width: 240 }} alt="" />
                                                <span className="text-dark fw-medium mt-3 d-block">
                                                    LTR Version
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="d-grid">
                                            <Link to="/" className="dark-version t-dark mt-4" onclick="setTheme('style-dark')">
                                                <img src="../assets/images/layouts/dark-dash.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{ width: 240 }} alt="" />
                                                <span className="text-dark fw-medium mt-3 d-block">
                                                    Dark Version
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="d-grid">
                                            <Link to="/" className="light-version t-light mt-4" onclick="setTheme('style')">
                                                <img src="../assets/images/layouts/light-dash.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{ width: 240 }} alt="" />
                                                <span className="text-dark fw-medium mt-3 d-block">
                                                    Light Version
                                                </span>
                                            </Link>
                                        </li>
                                        <li className="d-grid">
                                            <Link to="https://shreethemes.in/doctris/layouts/landing/index.html" target="_blank" className="mt-4">
                                                <img src="../assets/images/layouts/landing-light.png" className="img-fluid rounded-md shadow-md d-block mx-auto" style={{ width: 240 }} alt="" />
                                                <span className="text-dark fw-medium mt-3 d-block">
                                                    Landing Page
                                                </span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* end Style switcher */}
                        </div>
                        {/*end col*/}
                    </div>
                    {/*end row*/}
                </div>
                <div className="offcanvas-footer p-4 border-top text-center">
                    <ul className="list-unstyled social-icon social mb-0">
                        <li className="list-inline-item mb-0">
                            <Link to="https://1.envato.market/doctris-template" target="_blank" className="rounded">
                                <i className="uil uil-shopping-cart align-middle" title="Buy Now" />
                            </Link>
                        </li>
                        <li className="list-inline-item mb-0">
                            <Link to="https://dribbble.com/shreethemes" target="_blank" className="rounded">
                                <i className="uil uil-dribbble align-middle" title="dribbble" />
                            </Link>
                        </li>
                        <li className="list-inline-item mb-0">
                            <Link to="https://www.behance.net/shreethemes" target="_blank" className="rounded">
                                <i className="uil uil-behance align-middle" title="behance" />
                            </Link>
                        </li>
                        <li className="list-inline-item mb-0">
                            <Link to="https://www.facebook.com/shreethemes" target="_blank" className="rounded">
                                <i className="uil uil-facebook-f align-middle" title="facebook" />
                            </Link>
                        </li>
                        <li className="list-inline-item mb-0">
                            <Link to="https://www.instagram.com/shreethemes/" target="_blank" className="rounded">
                                <i className="uil uil-instagram align-middle" title="instagram" />
                            </Link>
                        </li>
                        <li className="list-inline-item mb-0">
                            <Link to="https://twitter.com/shreethemes" target="_blank" className="rounded">
                                <i className="uil uil-twitter align-middle" title="twitter" />
                            </Link>
                        </li>
                        <li className="list-inline-item mb-0">
                            <Link to="mailto:support@shreethemes.in" className="rounded">
                                <i className="uil uil-envelope align-middle" title="email" />
                            </Link>
                        </li>
                        <li className="list-inline-item mb-0">
                            <Link to="https://shreethemes.in" target="_blank" className="rounded">
                                <i className="uil uil-globe align-middle" title="website" />
                            </Link>
                        </li>
                    </ul>
                    {/*end icon*/}
                </div>
            </div>
            {/* Offcanvas End */}
        </>
    )
}

export default calendar
