import React from 'react';
import './about.css';
import { FaCheckCircle } from "react-icons/fa";
import { PiMedal } from "react-icons/pi";
import { FaMedal } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";






const About = () => {
    return (
        <div className="container p-5 mt-5">
            <div className="row gap-4">
                {/* MAIN- LEFT-SIDE */}
                <div className="col-lg-6">
                    <img style={{ width: '100%', height: '600px', objectFit: 'cover' }} src='https://swankeventsboston.com/wp-content/uploads/2019/07/swank-events-boston-gallery-17.png' />
                </div>

                {/* MAIN-RIGHT-SIDE */}
                <div className="col-lg-5 mt-4">
                    <h6 className='b'>About Evenizer</h6>
                    <h2 className='fw-bold'>We Are The Best Event Planner & Organizer In Town</h2>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    {/* again row for list and img */}
                    <div className="row ">
                        {/* again-left-side */}
                        <div className="box col-lg-5 rounded-2 py-1 px-0">
                            <div className="box d-flex flex-column align-items-center  justify-content-center text-center mx-auto gap-2 ">
                                <div className="icon-medal mt-4">
                                    <FaMedal size={50} color='DA22FF' />
                                </div>
                                <div className="ten fw-bolder"><h1>10 <span><FaPlus size={12} color='DA22FF' />
                                </span></h1></div>
                                <div className="exp mb-4 mt-0"><h6>Years Of Experiences</h6></div>
                            </div>
                        </div>
                        {/* again-right-side */}
                        <div className="col-lg-7">
                            <ul className='listed mt-3'>
                                <li>
                                    <FaCheckCircle color='#DA22FF' />
                                    <span className='list-item-text'>Best Quality Services</span>
                                </li>
                                <li>
                                    <FaCheckCircle color='#DA22FF' />
                                    <span className='list-item-text'>100% Satisfaction Guarantee</span>
                                </li>
                                <li>
                                    <FaCheckCircle color='#DA22FF' />
                                    <span className='list-item-text'>Quality Control System</span>
                                </li>
                                <li>
                                    <FaCheckCircle color='#DA22FF' />
                                    <span className='list-item-text'>Commitment to Customers</span>
                                </li>
                                <li>
                                    <FaCheckCircle color='#DA22FF' />
                                    <span className='list-item-text'>Highly Professional Team</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="btn px-4 fs-6 fw-bold py-2 mt-4">ABOUT US</div>
                </div>
            </div>
        </div>

    );
}

export default About;