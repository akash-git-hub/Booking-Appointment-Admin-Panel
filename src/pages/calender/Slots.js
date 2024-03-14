import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { convertTo12HourFormat } from '../../Function/Helper';


const Slots = ({ myslote, onClick, slotid }) => {
    const [slote,setSlote] = useState();
    useEffect(()=>{ setSlote(myslote); },[myslote])
    return (
        <>
            <div id="external-events">
                <div className="card border-0 p-4 shadow rounded">
                    <span className="h6">Available Slots</span>
                    <div className='slot_Scroll'>
                        <Row>
                            {slote && slote.length > 0 &&
                                slote.map((e, index) => (
                                    <Col md={6} key={index}>
                                        <div className="d-grid fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event text-center"  onClick={() => onClick(e)}>

                                            <div className={e.isBooked == 1 ? "bookedSlot" : ''}>
                                            <div className={e.id == slotid ? "BookActive" : ''}>
                                                <div className="fc-event-main ">
                                                    {convertTo12HourFormat(moment.utc(e.utc_start_date_time).local().format('HH:mm:ss'))} To {convertTo12HourFormat(moment.utc(e.utc_end_date_time).local().format('HH:mm:ss'))}
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                ))
                            }


                            {/* <Col>
                                <div className="d-grid fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event text-center BookActive">
                                    <div className="fc-event-main">02:00PM To 03:00AM</div>

                                </div>
                            </Col> */}
                        </Row>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Slots
