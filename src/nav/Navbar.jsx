import React from 'react';
import { FaSearch } from "react-icons/fa";
import './style.css'




const Navbar = () => {
    return (
        <>
            <div className="container-fluid navv">
                <div className="container navv d-flex gap-0 align-items-center justify-content-between text-white px-5">
                    <div className="brand mb-4 mt-3 p-0 m-0">
                        <img src='https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/Evenizer-logo-2.png' />
                    </div>
                    <div className="items mt-4 d-flex align-items-center mb-4 mt-3 me-5">
                        <ul className='list-unstyled d-flex  align-items-center gap-4 p-0 m-0'>
                            <li>HOME</li>
                            <li>ABOUT US</li>
                            <li>SERVICES</li>
                            <li>PAGE</li>
                            <li>BLOG</li>

                        </ul>
                    </div>
                    <div className="d-flex align-items-center justify-content-between mb-4 mt-4 gap-4">
                        <div><FaSearch size={20} /></div>
                        <div className="button">
                            <button className='btn text-light px-4 rounded-3 fw-bold'> CONTACT US</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default Navbar;
