import React, { useState } from 'react';
import { FaSearch, FaBars } from "react-icons/fa"; // Import FaBars
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <>
            <div className="container-fluid navv">
                <div className="nav-w d-flex gap-0 align-items-center justify-content-between text-white px-5">
                    <img style={{ width: '200px' }} src='https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/Evenizer-logo-2.png' alt="Brand Logo" />

                    <div className="nav-home mt-4 d-flex align-items-center mb-3 mt-3 me-5">
                        <ul className='list-unstyled d-flex align-items-center gap-4 p-0 m-0'>
                            <a href='/' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}><li> HOME</li></a>
                            <a href='/aboutus' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}><li> ABOUT US</li></a>
                            <a href='/services' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}><li> SERVICES</li></a>
                            <a href='/page' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}><li> PAGE</li></a>
                            <a href='/blog' style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}><li> BLOGS</li></a>
                        </ul>

                    </div>

                    {/* Hamburger Icon */}
                    <div className="nav-home mt-4 d-flex align-items-center mb-3 mt-3 me-5 d-lg-none">
                        <FaBars size={24} onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
                    </div>

                    {/* Sidebar */}
                    {showSidebar && (
                        <div className="sidebar d-lg-none">
                            <ul className='list-unstyled d-flex flex-column gap-4 p-0 m-0'>
                                <Link to="/" onClick={toggleSidebar}><li> HOME</li></Link>
                                <Link to="/aboutus" onClick={toggleSidebar}><li> ABOUT US</li></Link>
                                <Link to="/services" onClick={toggleSidebar}><li> SERVICES</li></Link>
                                <Link to="/page" onClick={toggleSidebar}><li> PAGE</li></Link>
                                <Link to="/blog" onClick={toggleSidebar}><li> BLOGS</li></Link>
                            </ul>
                        </div>
                    )}

                    {/* Regular Navbar Items */}
                    <div className="d-flex align-items-center justify-content-between mb-3 mt-4 gap-4 d-none d-lg-flex">
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
            </div >

        </>
    );
};

export default Navbar;
