import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Home.css';
import { MdOutlinePlayCircle } from "react-icons/md";


const HomePage = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active position-relative">
                        <div className="carousel-content-wrapper">
                            <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="First Slide h-50" />
                            <div className="col-lg-6 carousel-caption fw-bold d-none d-md-block position-absolute top-2 start-0">
                                <h1 className="text-left display-4 fw-bold">
                                    Let's Celebrate Your Events Festival Party With Us</h1>
                                <p className='col-lg-12 fw-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="imgs d-flex align-items-center justify-content-around gap-4 position-absolute bottom-0 start-0">
                            <div className="button1">
                                <button className='btn text-light px-5 py-3 rounded-3 fw-bold'>LEARN MORE</button>
                            </div>
                            <div className="button2">
                                <button className='btns d-flex align-items-center justify-content-around gap-4'>
                                    <div className="watch"> <MdOutlinePlayCircle size={45} /></div>
                                    <div className="w fw-normal">WATCH INTRO</div> </button>

                            </div>
                        </div>
                    </div>
                    <div className="carousel-item position-relative">
                        <div className="carousel-content-wrapper">
                            <img src="https://www.sassymamasg.com/wp-content/uploads/2020/02/birthday-treats-singapore-2020-deals-freebies-discounts-1024x797.jpg" className="d-block w-100 h-50" alt="Second Slide" />
                            <div className="col-lg-6 carousel-caption fw-bold d-none d-md-block position-absolute top-2 start-0">
                                <h1 className="text-left display-4 fw-bold">
                                    Let's Celebrate Your Events Festival Party With Us</h1>
                                <p className='col-lg-12 fw-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..</p>
                            </div>
                            <div className="imgs d-flex align-items-center justify-content-around gap-4 position-absolute bottom-0 start-0">
                                <div className="button1">
                                    <button className='btn text-light px-5 py-3 rounded-3 fw-bold'>LEARN MORE</button>
                                </div>
                                <div className="button2">  <button className='btns d-flex align-items-center justify-content-around gap-3'>
                                    <div className="watch"> <MdOutlinePlayCircle size={45} /></div>

                                    <div className="w fw-normal">WATCH INTRO</div> </button></div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item position-relative">
                        <div className="carousel-content-wrapper">
                            <img src="https://www.telesambre.be/sites/default/files/2023-05/bad-food-court-intro_0.png" className="d-block w-100 h-50" alt="Third Slide" />
                            <div className="col-lg-6 carousel-caption fw-bold d-none d-md-block position-absolute top-2 start-0">
                                <h1 className="text-left display-4 fw-bold">
                                    Let's Celebrate Your Events Festival Party With Us</h1>
                                <p className='col-lg-12 fw-normal text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>
                        <div className="imgs d-flex align-items-center justify-content-around gap-4 position-absolute bottom-0 start-0">
                            <div className="button1">
                                <button className='btn text-light px-5 py-3 rounded-3 fw-bold'> LEARN MORE</button>
                            </div>
                            <div className="button2">
                                <button className='btns d-flex align-items-center justify-content-around gap-4'>
                                    <div className="watch"> <MdOutlinePlayCircle size={45} /></div>
                                    <div className="w" fw-normal>WATCH INTRO</div> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default HomePage;

