import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
    return (
        <>
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
        </>
    )
}

export default Pagination
