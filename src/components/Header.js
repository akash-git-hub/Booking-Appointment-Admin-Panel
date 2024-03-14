import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from "../states/AuthContext";
import { useContext } from "react";

const Header = () => {
    const { setLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const onLogoutHandler = () => {
        setLoggedIn(false);
        localStorage.clear();
        navigate("/", { replace: true })
    };

    const toggleSidebar = () => {
        document.getElementById("sidebar").classList.toggle("toggled");
        document.querySelector(".page-wrapper").classList.toggle("toggled");
    };

    return (
        <>
            <div className="top-header">
                <div className="header-bar d-flex justify-content-between border-bottom">
                    <div className="d-flex align-items-center">
                        <Link to="#" className="logo-icon">
                            <img
                                src="doctor/assets/images/logo-icon.png"
                                height={30}
                                className="small"
                                alt=""
                            />
                            <span className="big">
                                <img
                                    src="doctor/assets/images/logo-dark.png"
                                    height={40}
                                    className="logo-light-mode"
                                    alt=""
                                />
                                <img
                                    src="doctor/assets/images/logo-light.png"
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
                        {/* <div className="search-bar p-0 d-none d-lg-block ms-2">
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
                        </div> */}
                    </div>
                    <ul className="list-unstyled mb-0">
                        <li className="list-inline-item mb-0 ms-1">
                            <span onClick={() => onLogoutHandler()}
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight"
                                aria-controls="offcanvasRight"
                            >
                                <div className="btn btn-icon btn-pills btn-soft-primary">
                                    <i className="bi bi-box-arrow-right" />
                                </div>
                            </span>
                        </li>
                    </ul>
                </div>
            </div >
        </>
    )
}

export default Header
