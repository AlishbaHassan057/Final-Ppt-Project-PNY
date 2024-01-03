import React from 'react';
import { FaCircleCheck, FaMedal } from "react-icons/fa";
import './about.css';

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    {/* Content for the left column goes here if needed */}
                </div>
                <div className="col-lg-6">
                    <h2>We Are The Best Event Planner & Organizer In Town</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                    <div className="row">
                        <div className="col-lg-6 text-center mx-auto">
                            <div className="d-flex flex-column align-items-center justify-content-center text-center mx-auto">
                                <div className="icon-medal text-center mx-auto"><FaMedal /></div>
                                <div className="ten"><h2>10 +</h2></div>
                                <div className="exp"><h3>Years Of Experiences</h3></div>
                            </div>
                        </div>
                        <div className="col-lg-6">

                            <ul className='listed'>
                                <li>
                                    <FaCircleCheck color='#DA22FF' />
                                    <span className='list-item-text'>Best Quality Services</span>
                                </li>
                                <li>
                                    <FaCircleCheck color='#DA22FF' />
                                    <span className='list-item-text'>100% Satisfaction Guarantee</span>
                                </li>
                                <li>
                                    <FaCircleCheck color='#DA22FF' />
                                    <span className='list-item-text'>Quality Control System</span>
                                </li>
                                <li>
                                    <FaCircleCheck color='#DA22FF' />
                                    <span className='list-item-text'>Commitment to Customers</span>
                                </li>
                                <li>
                                    <FaCircleCheck color='#DA22FF' />
                                    <span className='list-item-text'>Highly Professional Team</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;