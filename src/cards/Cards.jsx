import React from 'react'
import './card.css'
import SubCard from './SubCard'

const Cards = () => {
    return (
        <>
            <div className="container mb-5">
                <div className="col-lg-9 text-center mx-auto fw-bold mt-5">
                    <h5 className='fw-bold mt-5'>Our Services</h5>
                    <h1 className='fw-bold'>We Provide The Best Service For Your Event</h1>
                </div>
                <div className="col-lg-8 text-secondary text-center mx-auto">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p></div>
                <div className="row">
                    <SubCard />
                </div>
            </div>


        </>
    )
}

export default Cards