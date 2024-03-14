import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({ totalpg, crpage, onClick }) => {
    const pageNumbers = [];
    let i = 1;
    while (i <= totalpg) {
        pageNumbers.push(i);
        i++;
    }
    return (
        <>
            <div className="col-12 mt-4">
                <div className="d-md-flex align-items-center text-center justify-content-end">
                    <ul className="pagination justify-content-center mb-0 mt-3 mt-sm-0">
                        {crpage === 1 ?
                            <li className="page-item">
                                <button disabled className="page-link c_pointer" aria-label="Previous" >  Prev </button>
                            </li>
                            :
                            <li className="page-item" onClick={() => onClick(crpage - 1)}>
                                <button disabled className="page-link c_pointer" aria-label="Previous" >  Prev </button>
                            </li>

                        }
                        {pageNumbers.map((value, key) => (
                            <li key={key} className={crpage == value ? "page-item active" : "page-item"} onClick={() => onClick(value)}>
                                <button className="page-link c_pointer">{value}</button>
                            </li>
                        ))}

                        {crpage < totalpg ?
                            <li className="page-item" onClick={() => onClick(crpage + 1)}>
                                <button className="page-link c_pointer" aria-label="Next" > Next </button>
                            </li>
                            :
                            <li className="page-item">
                                <button disabled className="page-link c_pointer" aria-label="Next" > Next </button>
                            </li>
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Pagination
