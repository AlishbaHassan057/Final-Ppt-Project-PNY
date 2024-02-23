import React from 'react'
import Navbar from '../homepage/navbar/Navbar'
import './services.css'
import Cards from '../homepage/cards/Cards'
import Experience from '../homepage/experience/Experience'
import Join from '../homepage/join/Join'
import Footer from '../homepage/footer/Footer'


const Services = () => {
    return (
        <> <Navbar />
            <div className="services-container">
                <h1 className="services-text display-6">SERVICES</h1>
            </div>
            <Cards />
            <Experience />

            <Join />
            <Footer />




        </>
    )
}

export default Services