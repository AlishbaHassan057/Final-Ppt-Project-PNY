import React from "react";
import Navbar from "../homepage/navbar/Navbar";
import "./services.css";
import Cards from "../homepage/cards/Cards";
import Experience from "../homepage/experience/Experience";

import Footer from "../homepage/footer/Footer";
import Upcoming from "../service/upcoming/Upcoming";

const Services = () => {
  return (
    <>
      {" "}
      <Navbar />
      <div className="services-container">
        <h1 className="services-text display-6">SERVICES</h1>
      </div>
      <Cards />
      <Experience />
      <Upcoming />
      <Footer />
    </>
  );
};

export default Services;
