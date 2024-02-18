import React from 'react'
import Slider from "./slider/Slider";
import About from "./about/About";
import Cards from "./cards/Cards";
import Experience from "./experience/Experience";
import Logo from "./logo/Logo";
import Team from "./team/Team";
import Pricing from "./pricing/Pricing";
import Footer from "./footer/Footer";
import PasteBoard from "./pasteboard/PasteBoard";
import Navbar from "./navbar/Navbar";
import Join from "./join/Join";
import Upcoming from "./upcoming/Upcoming";
import Blogs from "./blog/Blogs";
import Testimonials from "./testimonials/Testimonials";

const HomeMain = () => {
    return (
        <div>
            <Navbar />
            <Slider />
            <PasteBoard />
            <About />
            <Cards />
            <Experience />
            <Upcoming />
            <Logo />
            <Team />
            <Pricing />
            <Testimonials />
            <Join />
            <Blogs />
            <Footer />

        </div>
    )
}

export default HomeMain
