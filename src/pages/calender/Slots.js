import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Slots = () => {
    return (
        <>
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
        </>
    )
}

export default Slots
