import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>
        <footer className="w-100" style={{ background: 'white' }}>
                <h6 className="text-center p-2 mt-3 mb-0" >Powered by <img style={{maxWidth:'36px'}} src='/doctor/assets/images/boderfav.png' /><Link target='blank' to={"https://www.state1.io"} ><u style={{fontSize:'12px'}}>State1</u></Link></h6>
            {/* </div> */}
        </footer >
        </>
    )
}

export default Footer
