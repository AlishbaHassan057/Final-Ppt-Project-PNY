import React from 'react';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid navv">
                <div className="nav-w d-flex gap-0 align-items-center justify-content-between text-white px-5">
                    <img style={{ width: '200px' }} src='https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/Evenizer-logo-2.png' alt="Brand Logo" />

                    <div className="nav-home mt-4 d-flex align-items-center mb-3 mt-3 me-5">
                        <ul className='list-unstyled d-flex  align-items-center gap-4 p-0 m-0'>
                            <li>HOME</li>
                            <li>ABOUT US</li>
                            <li>SERVICES</li>
                            <li>PAGE</li>
                            <li>BLOG</li>
                        </ul>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-3 mt-4 gap-4">
                        <Link to="/login">
                            <div>Sign Up</div>
                        </Link>

                        <div><FaSearch size={20} /></div>
                        <div className="button">

                            <Link to="/contact">
                                <button className="btn text-light px-4 rounded-3 fw-bold"> CONTACT US</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;
