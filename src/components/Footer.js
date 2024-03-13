import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
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
        </>
    )
}

export default Footer
