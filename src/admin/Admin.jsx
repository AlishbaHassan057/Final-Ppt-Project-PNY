import React from 'react';
import Navbar from "../navbar/Navbar";
import './admin.css'
import { FaGreaterThan } from "react-icons/fa";
import AboutEvenizer from '../aboutevenizer/AboutEvenizer';


const Admin = () => {
    return (
        <>
            <Navbar />
            <div className='expp-img'>
                <h1 className='fw-bolder'>About Us</h1>
                <h6 className='fw-bold mt-1'>Home <span><FaGreaterThan size={15} color='purple' />
                </span>  About Us</h6>
            </div>
            {/* About */}
            <AboutEvenizer />




        </>
    )
}

export default Admin