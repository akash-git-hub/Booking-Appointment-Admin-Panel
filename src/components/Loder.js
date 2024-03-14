import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Loder({ loder }) {
    return (
        <>
            {loder && <div className='MainLoader'> <Spinner animation="border" role="status" className='Loader'>  </Spinner> </div>}
        </>
    )
}
