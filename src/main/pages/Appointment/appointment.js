import React from 'react'
import { Link } from 'react-router-dom'

const appointment = () => {

  const toggleSidebar = () => {
    document.getElementById("sidebar").classList.toggle("toggled");
    document.querySelector(".page-wrapper").classList.toggle("toggled");
  };


  return (
    <div>
      <>
        <div className="page-wrapper doctris-theme toggled">
          {/* sidebar-wrapper */}
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
          {/* sidebar-wrapper  */}
          {/* Start Page Content */}
          <main className="page-content bg-light">
            <div className="top-header">
              <div className="header-bar d-flex justify-content-between border-bottom">
                <div className="d-flex align-items-center">
                  <Link to="#" className="logo-icon">
                    <img
                      src="../assets/images/logo-icon.png"
                      height={30}
                      className="small"
                      alt=""
                    />
                    <span className="big">
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
                    </span>
                  </Link>
                  <Link
                    id="close-sidebar"
                    className="btn btn-icon btn-pills btn-soft-primary ms-2"
                    href="#"
                    onClick={toggleSidebar}
                  >
                    <i className="bi bi-list" />
                  </Link>
                  <div className="search-bar p-0 d-none d-lg-block ms-2">
                    <div id="search" className="menu-search mb-0">
                      <form
                        role="search"
                        method="get"
                        id="searchform"
                        className="searchform"
                      >
                        <div>
                          <input
                            type="text"
                            className="form-control border rounded-pill"
                            name="s"
                            id="s"
                            placeholder="Search Keywords..."
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <ul className="list-unstyled mb-0">
                  <li className="list-inline-item mb-0 ms-1">
                    <Link
                      href="/"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasRight"
                      aria-controls="offcanvasRight"
                    >
                      <div className="btn btn-icon btn-pills btn-soft-primary">
                        <i className="bi bi-box-arrow-right" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container-fluid">
              <div className="layout-specing text-left">
                <div className="row">
                  <div className="col-xl-9 col-lg-6 col-md-4">
                    <h5 className="mb-0">My Booking</h5>
                    <nav aria-label="breadcrumb" className="d-inline-block mt-2">
                      <ul className="breadcrumb breadcrumb-muted bg-transparent rounded mb-0 p-0">
                        <li className="breadcrumb-item">
                          <Link to="index.html">Home</Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                          My Booking
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/*end col*/}
                </div>
                {/*end row*/}
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
                              Booking ID
                            </th>
                            <th
                              className="border-bottom p-3"
                              style={{ minWidth: 180 }}
                            >
                              Name
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
                          <tr>
                            <th className="p-3">1</th>
                            <td className="p-3">
                              <Link to="#" className="text-dark">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="../assets/images/client/01.jpg"
                                    className="avatar avatar-md-sm rounded-circle shadow"
                                    alt=""
                                  />
                                  <span className="ms-2">Howard Tanner</span>
                                </div>
                              </Link>
                            </td>
                            <td className="p-3">20th Dec 2020</td>
                            <td className="p-3">11:00AM To 12:00PM</td>
                          </tr>
                          <tr>
                            <th className="p-3">1</th>
                            <td className="p-3">
                              <Link to="#" className="text-dark">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="../assets/images/client/01.jpg"
                                    className="avatar avatar-md-sm rounded-circle shadow"
                                    alt=""
                                  />
                                  <span className="ms-2">Howard Tanner</span>
                                </div>
                              </Link>
                            </td>
                            <td className="p-3">20th Dec 2020</td>
                            <td className="p-3">11:00AM To 12:00PM</td>
                          </tr>
                          <tr>
                            <th className="p-3">1</th>
                            <td className="p-3">
                              <Link to="#" className="text-dark">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="../assets/images/client/01.jpg"
                                    className="avatar avatar-md-sm rounded-circle shadow"
                                    alt=""
                                  />
                                  <span className="ms-2">Howard Tanner</span>
                                </div>
                              </Link>
                            </td>
                            <td className="p-3">20th Dec 2020</td>
                            <td className="p-3">11:00AM To 12:00PM</td>
                          </tr>
                          <tr>
                            <th className="p-3">1</th>
                            <td className="p-3">
                              <Link to="#" className="text-dark">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="../assets/images/client/01.jpg"
                                    className="avatar avatar-md-sm rounded-circle shadow"
                                    alt=""
                                  />
                                  <span className="ms-2">Howard Tanner</span>
                                </div>
                              </Link>
                            </td>
                            <td className="p-3">20th Dec 2020</td>
                            <td className="p-3">11:00AM To 12:00PM</td>
                          </tr>
                          <tr>
                            <th className="p-3">1</th>
                            <td className="p-3">
                              <Link to="#" className="text-dark">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="../assets/images/client/01.jpg"
                                    className="avatar avatar-md-sm rounded-circle shadow"
                                    alt=""
                                  />
                                  <span className="ms-2">Howard Tanner</span>
                                </div>
                              </Link>
                            </td>
                            <td className="p-3">20th Dec 2020</td>
                            <td className="p-3">11:00AM To 12:00PM</td>
                          </tr>
                          <tr>
                            <th className="p-3">1</th>
                            <td className="p-3">
                              <Link to="#" className="text-dark">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="../assets/images/client/01.jpg"
                                    className="avatar avatar-md-sm rounded-circle shadow"
                                    alt=""
                                  />
                                  <span className="ms-2">Howard Tanner</span>
                                </div>
                              </Link>
                            </td>
                            <td className="p-3">20th Dec 2020</td>
                            <td className="p-3">11:00AM To 12:00PM</td>
                          </tr>
                          <tr>
                            <th className="p-3">1</th>
                            <td className="p-3">
                              <Link to="#" className="text-dark">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="../assets/images/client/01.jpg"
                                    className="avatar avatar-md-sm rounded-circle shadow"
                                    alt=""
                                  />
                                  <span className="ms-2">Howard Tanner</span>
                                </div>
                              </Link>
                            </td>
                            <td className="p-3">20th Dec 2020</td>
                            <td className="p-3">11:00AM To 12:00PM</td>
                          </tr>
                          <tr>
                            <th className="p-3">1</th>
                            <td className="p-3">
                              <Link to="#" className="text-dark">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="../assets/images/client/01.jpg"
                                    className="avatar avatar-md-sm rounded-circle shadow"
                                    alt=""
                                  />
                                  <span className="ms-2">Howard Tanner</span>
                                </div>
                              </Link>
                            </td>
                            <td className="p-3">20th Dec 2020</td>
                            <td className="p-3">11:00AM To 12:00PM</td>
                          </tr>
                          <tr>
                            <th className="p-3">1</th>
                            <td className="p-3">
                              <Link to="#" className="text-dark">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="../assets/images/client/01.jpg"
                                    className="avatar avatar-md-sm rounded-circle shadow"
                                    alt=""
                                  />
                                  <span className="ms-2">Howard Tanner</span>
                                </div>
                              </Link>
                            </td>
                            <td className="p-3">20th Dec 2020</td>
                            <td className="p-3">11:00AM To 12:00PM</td>
                          </tr>
                          <tr>
                            <th className="p-3">1</th>
                            <td className="p-3">
                              <Link to="#" className="text-dark">
                                <div className="d-flex align-items-center">
                                  <img
                                    src="../assets/images/client/01.jpg"
                                    className="avatar avatar-md-sm rounded-circle shadow"
                                    alt=""
                                  />
                                  <span className="ms-2">Howard Tanner</span>
                                </div>
                              </Link>
                            </td>
                            <td className="p-3">20th Dec 2020</td>
                            <td className="p-3">11:00AM To 12:00PM</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/*end row*/}
                <div className="row text-center">
                  {/* PAGINATION START */}
                  <div className="col-12 mt-4">
                    <div className="d-md-flex align-items-center text-center justify-content-between">
                      <span className="text-muted me-3">
                        Showing 1 - 10 out of 50
                      </span>
                      <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                        <li className="page-item">
                          <Link
                            className="page-link"
                            href="/"
                            aria-label="Previous"
                          >
                            Prev
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link className="page-link" href="/">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="/">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="/">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link
                            className="page-link"
                            href="/"
                            aria-label="Next"
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/*end col*/}
                  {/* PAGINATION END */}
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
                        <Link
                          href="https://futurristic.com/"
                          target="_blank"
                          className="text-reset"
                        >
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
        <div
          className="offcanvas offcanvas-end shadow border-0"
          tabIndex={-1}
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header p-4 border-bottom">
            <h5 id="offcanvasRightLabel" className="mb-0">
              <img
                src="../assets/images/logo-dark.png"
                height={22}
                className="light-version"
                alt=""
              />
              <img
                src="../assets/images/logo-light.png"
                height={22}
                className="dark-version"
                alt=""
              />
            </h5>
            <button
              type="button"
              className="btn-close d-flex align-items-center text-dark"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
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
                        <Link
                          href="/"
                          className="rtl-version t-rtl-light"
                          onclick="setTheme('style-rtl')"
                        >
                          <img
                            src="../assets/images/layouts/light-dash-rtl.png"
                            className="img-fluid rounded-md shadow-md d-block mx-auto"
                            style={{ width: 240 }}
                            alt=""
                          />
                          <span className="text-dark fw-medium mt-3 d-block">
                            RTL Version
                          </span>
                        </Link>
                      </li>
                      <li className="d-grid">
                        <Link
                          href="/"
                          className="ltr-version t-ltr-light"
                          onclick="setTheme('style')"
                        >
                          <img
                            src="../assets/images/layouts/light-dash.png"
                            className="img-fluid rounded-md shadow-md d-block mx-auto"
                            style={{ width: 240 }}
                            alt=""
                          />
                          <span className="text-dark fw-medium mt-3 d-block">
                            LTR Version
                          </span>
                        </Link>
                      </li>
                      <li className="d-grid">
                        <Link
                          href="/"
                          className="dark-rtl-version t-rtl-dark"
                          onclick="setTheme('style-dark-rtl')"
                        >
                          <img
                            src="../assets/images/layouts/dark-dash-rtl.png"
                            className="img-fluid rounded-md shadow-md d-block mx-auto"
                            style={{ width: 240 }}
                            alt=""
                          />
                          <span className="text-dark fw-medium mt-3 d-block">
                            RTL Version
                          </span>
                        </Link>
                      </li>
                      <li className="d-grid">
                        <Link
                          href="/"
                          className="dark-ltr-version t-ltr-dark"
                          onclick="setTheme('style-dark')"
                        >
                          <img
                            src="../assets/images/layouts/dark-dash.png"
                            className="img-fluid rounded-md shadow-md d-block mx-auto"
                            style={{ width: 240 }}
                            alt=""
                          />
                          <span className="text-dark fw-medium mt-3 d-block">
                            LTR Version
                          </span>
                        </Link>
                      </li>
                      <li className="d-grid">
                        <Link
                          href="/"
                          className="dark-version t-dark mt-4"
                          onclick="setTheme('style-dark')"
                        >
                          <img
                            src="../assets/images/layouts/dark-dash.png"
                            className="img-fluid rounded-md shadow-md d-block mx-auto"
                            style={{ width: 240 }}
                            alt=""
                          />
                          <span className="text-dark fw-medium mt-3 d-block">
                            Dark Version
                          </span>
                        </Link>
                      </li>
                      <li className="d-grid">
                        <Link
                          href="/"
                          className="light-version t-light mt-4"
                          onclick="setTheme('style')"
                        >
                          <img
                            src="../assets/images/layouts/light-dash.png"
                            className="img-fluid rounded-md shadow-md d-block mx-auto"
                            style={{ width: 240 }}
                            alt=""
                          />
                          <span className="text-dark fw-medium mt-3 d-block">
                            Light Version
                          </span>
                        </Link>
                      </li>
                      <li className="d-grid">
                        <Link
                          href="https://shreethemes.in/doctris/layouts/landing/index.html"
                          target="_blank"
                          className="mt-4"
                        >
                          <img
                            src="../assets/images/layouts/landing-light.png"
                            className="img-fluid rounded-md shadow-md d-block mx-auto"
                            style={{ width: 240 }}
                            alt=""
                          />
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
                <Link
                  href="https://1.envato.market/doctris-template"
                  target="_blank"
                  className="rounded"
                >
                  <i className="uil uil-shopping-cart align-middle" title="Buy Now" />
                </Link>
              </li>
              <li className="list-inline-item mb-0">
                <Link
                  href="https://dribbble.com/shreethemes"
                  target="_blank"
                  className="rounded"
                >
                  <i className="uil uil-dribbble align-middle" title="dribbble" />
                </Link>
              </li>
              <li className="list-inline-item mb-0">
                <Link
                  href="https://www.behance.net/shreethemes"
                  target="_blank"
                  className="rounded"
                >
                  <i className="uil uil-behance align-middle" title="behance" />
                </Link>
              </li>
              <li className="list-inline-item mb-0">
                <Link
                  href="https://www.facebook.com/shreethemes"
                  target="_blank"
                  className="rounded"
                >
                  <i className="uil uil-facebook-f align-middle" title="facebook" />
                </Link>
              </li>
              <li className="list-inline-item mb-0">
                <Link
                  href="https://www.instagram.com/shreethemes/"
                  target="_blank"
                  className="rounded"
                >
                  <i className="uil uil-instagram align-middle" title="instagram" />
                </Link>
              </li>
              <li className="list-inline-item mb-0">
                <Link
                  href="https://twitter.com/shreethemes"
                  target="_blank"
                  className="rounded"
                >
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
        {/* Modal start */}
        {/* Add New Appointment Start */}
        <div
          className="modal fade"
          id="appointmentform"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-bottom p-3">
                <h5 className="modal-title" id="exampleModalLabel">
                  Book an Appointment
                </h5>
                <button
                  type="button"
                  className="btn btn-icon btn-close"
                  data-bs-dismiss="modal"
                  id="close-modal"
                >
                  <i className="uil uil-times fs-4 text-dark" />
                </button>
              </div>
              <div className="modal-body p-3 pt-4">
                <form>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Patient Name <span className="text-danger">*</span>
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-control"
                          placeholder="Patient Name :"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Departments</label>
                        <select className="form-select form-control">
                          <option value="EY">Eye Care</option>
                          <option value="GY">Gynecologist</option>
                          <option value="PS">Psychotherapist</option>
                          <option value="OR">Orthopedic</option>
                          <option value="DE">Dentist</option>
                          <option value="GA">Gastrologist</option>
                          <option value="UR">Urologist</option>
                          <option value="NE">Neurologist</option>
                        </select>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">Doctor</label>
                        <select className="form-select form-control">
                          <option value="CA">Dr. Calvin Carlo</option>
                          <option value="CR">Dr. Cristino Murphy</option>
                          <option value="AL">Dr. Alia Reddy</option>
                          <option value="TO">Dr. Toni Kovar</option>
                          <option value="JE">Dr. Jessica McFarlane</option>
                          <option value="EL">Dr. Elsie Sherman</option>
                          <option value="BE">Dr. Bertha Magers</option>
                          <option value="LO">Dr. Louis Batey</option>
                        </select>
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Email <span className="text-danger">*</span>
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-control"
                          placeholder="Your email :"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Phone <span className="text-danger">*</span>
                        </label>
                        <input
                          name="phone"
                          id="phone"
                          type="tel"
                          className="form-control"
                          placeholder="Your Phone :"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label"> Date : </label>
                        <input
                          name="date"
                          type="text"
                          className="form-control start"
                          placeholder="Select date :"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="input-time">
                          Time :{" "}
                        </label>
                        <input
                          name="time"
                          type="text"
                          className="form-control timepicker"
                          id="input-time"
                          placeholder="03:30 PM"
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Comments <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          rows={4}
                          className="form-control"
                          placeholder="Your Message :"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    {/*end col*/}
                    <div className="col-lg-12">
                      <div className="d-grid">
                        <button type="submit" className="btn btn-primary">
                          Book An Appointment
                        </button>
                      </div>
                    </div>
                    {/*end col*/}
                  </div>
                  {/*end row*/}
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Add New Appointment End */}
        {/* View Appintment Start */}
        <div
          className="modal fade"
          id="viewappointment"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-bottom p-3">
                <h5 className="modal-title" id="exampleModalLabel">
                  Appointment Detail
                </h5>
                <button
                  type="button"
                  className="btn btn-icon btn-close"
                  data-bs-dismiss="modal"
                  id="close-modal"
                >
                  <i className="uil uil-times fs-4 text-dark" />
                </button>
              </div>
              <div className="modal-body p-3 pt-4">
                <div className="d-flex align-items-center">
                  <img
                    src="../assets/images/client/01.jpg"
                    className="avatar avatar-small rounded-pill"
                    alt=""
                  />
                  <h5 className="mb-0 ms-3">Howard Tanner</h5>
                </div>
                <ul className="list-unstyled mb-0 d-md-flex justify-content-between mt-4">
                  <li>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex">
                        <h6>Age:</h6>
                        <p className="text-muted ms-2">25 year old</p>
                      </li>
                      <li className="d-flex">
                        <h6>Gender:</h6>
                        <p className="text-muted ms-2">Male</p>
                      </li>
                      <li className="d-flex">
                        <h6 className="mb-0">Department:</h6>
                        <p className="text-muted ms-2 mb-0">Cardiology</p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex">
                        <h6>Date:</h6>
                        <p className="text-muted ms-2">20th Dec 2020</p>
                      </li>
                      <li className="d-flex">
                        <h6>Time:</h6>
                        <p className="text-muted ms-2">11:00 AM</p>
                      </li>
                      <li className="d-flex">
                        <h6 className="mb-0">Doctor:</h6>
                        <p className="text-muted ms-2 mb-0">Dr. Calvin Carlo</p>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* View Appintment End */}
        {/* Accept Appointment Start */}
        <div
          className="modal fade"
          id="acceptappointment"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body py-5">
                <div className="text-center">
                  <div
                    className="icon d-flex align-items-center justify-content-center bg-soft-success rounded-circle mx-auto"
                    style={{ height: 95, width: 95 }}
                  >
                    <i className="uil uil-check-circle h1 mb-0" />
                  </div>
                  <div className="mt-4">
                    <h4>Accept Appointment</h4>
                    <p className="para-desc mx-auto text-muted mb-0">
                      Great doctor if you need your family member to get immediate
                      assistance, emergency treatment.
                    </p>
                    <div className="mt-4">
                      <Link to="#" className="btn btn-soft-success">
                        Accept
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Accept Appointment End */}
        {/* Cancel Appointment Start */}
        <div
          className="modal fade"
          id="cancelappointment"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body py-5">
                <div className="text-center">
                  <div
                    className="icon d-flex align-items-center justify-content-center bg-soft-danger rounded-circle mx-auto"
                    style={{ height: 95, width: 95 }}
                  >
                    <i className="uil uil-times-circle h1 mb-0" />
                  </div>
                  <div className="mt-4">
                    <h4>Cancel Appointment</h4>
                    <p className="para-desc mx-auto text-muted mb-0">
                      Great doctor if you need your family member to get immediate
                      assistance, emergency treatment.
                    </p>
                    <div className="mt-4">
                      <Link to="#" className="btn btn-soft-danger">
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Cancel Appointment End */}
        {/* Modal end */}


      </>

    </div>


  )
}

export default appointment
