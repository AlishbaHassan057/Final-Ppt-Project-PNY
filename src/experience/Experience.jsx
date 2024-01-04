import React from 'react'
import { PiHandshakeFill } from "react-icons/pi";
import './exp.css'


const Experience = () => {
    return (
        <>
            <div className="container">
                <div className="pro row exp-img mb-5 mx-auto text-center text-white">
                    <div className="col-lg-3">
                        <div className="pro d-flex flex-column justify-content-start align-items-center mx-auto text-center text-white">
                            <PiHandshakeFill size={50} />
                            <h2>125</h2>
                            <h6>Projects Done</h6>
                        </div>
                    </div>
                    <div className="col-lg-3"><div className="d-flex flex-column justify-content-start align-items-center">
                        <PiHandshakeFill size={50} />
                        <h2>200</h2>
                        <h6>Customer Happy</h6>
                    </div></div>
                    <div className="col-lg-3"><div className="d-flex flex-column justify-content-start align-items-center">
                        <PiHandshakeFill size={50} />
                        <h2>199</h2>
                        <h6>Service Guarantee</h6>
                    </div></div>
                    <div className="col-lg-3"><div className="d-flex flex-column justify-content-start align-items-center">
                        <PiHandshakeFill size={50} />
                        <h2>99</h2>
                        <h6>Team Experts</h6>
                    </div></div>
                </div>



            </div>



        </>
    )
}

export default Experience