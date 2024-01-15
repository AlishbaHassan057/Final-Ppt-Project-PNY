import React, { useEffect } from 'react';
import './pricing.css';
import { FaCheckCircle } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // Set to true if you want the animation to occur only once
        });
    }, []);

    return (
        <>
            <div className="pricing container-fluid mb-5">
                <div className="container row text-center mx-auto mt-5" >
                    <div className="mt-5">
                        <h5 className="services mt-5 fw-bold" data-aos="fade-down">Pricing & Plan</h5>
                        <h1 className='fw-bold' data-aos="fade-down">Services Price</h1>
                        <div className="col-lg-7 text-secondary text-center mx-auto no-gutters">
                            <p className='col-lg-10  text-center mx-auto' data-aos="fade-down">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                    </div>
                    {/* Cards */}
                    <div className="container d-flex align-items-center justify-content-around" style={{ width: '82%' }}>
                        {/* card-1 */}
                        <div className="col-lg-3 mx-auto" data-aos="fade-up">
                            <div className="card-1 dt mb-5 card d-flex flex-column align-items-center justify-content-center gap-2 mx-auto">
                                <h4 className='mt-0'>BIRTHDAY PARTY</h4>
                                <h2 className='p'>$145</h2>
                                <ul className='mb-5 list-unstyled'>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li> 6 Hours</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li>  Decoration</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li>  Photographer</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li>  Entertainment</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li> Up to 20 Persons</li></div></div>
                                </ul>
                            </div>
                        </div>

                        {/* card-2 */}
                        <div className="col-lg-3 mx-auto" data-aos="fade-down">
                            <div className="crds gp mb-5 card d-flex flex-column align-items-center justify-content-center gap-2 mx-auto">
                                <h4>WEDDING PARTY</h4>
                                <h2 className='prices'>$850</h2>
                                <ul className='mb-5 list-unstyled'>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li> 8 Hours</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li>  Decoration</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li>  Photographer</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li>  Entertainment</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li> Up to 100 Persons</li></div></div>
                                </ul>
                            </div>
                        </div>
                        {/* card-3 */}
                        <div className="col-lg-3 mx-auto" data-aos="fade-up" data-aos-delay="200">
                            <div className="crds dt mb-5 card d-flex flex-column align-items-center justify-content-center gap-2 mx-auto">
                                <h4>PARTY EVENTS</h4>
                                <h2 className='prices'>$650</h2>
                                <ul className='mb-5 list-unstyled'>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li> 8 Hours</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li>  Decoration</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li>  Photographer</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li>  Entertainment</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li> Up to 100 Persons</li></div></div>
                                </ul>
                            </div>
                        </div>
                        {/* card-4 */}
                        <div className="col-lg-3 mx-auto" data-aos="fade-down">

                            <div className="crds gp  mb-5 card d-flex flex-column align-items-center justify-content-center gap-2 mx-auto">
                                <h4>BIRTHDAY PARTY</h4>
                                <h2 className='prices'>$1200</h2>
                                <ul className='mb-5 list-unstyled'>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li> 12 hours</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li>  Decoration</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li>  Photographer</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li>  Entertainment</li></div></div>
                                    <div className="row py-1 justify-content-start align-items-center ">
                                        <div className="col-lg-2"><FaCheckCircle /></div>
                                        <div className="col-lg-10">
                                            <li> Up to 500 Persons</li></div></div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pricing;
