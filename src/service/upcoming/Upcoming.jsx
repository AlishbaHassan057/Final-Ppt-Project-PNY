// Upcoming.js
import React from "react";
import "./Upcoming.css";

import SubUpcoming from "./SubUpcoming";
import { upcomingEvents } from "./data";

const Upcoming = () => {
  return (
    <div className="container-fluid  bg-light">
      <div className="container extra w-75 mt-5 mb-5 mx-auto text-center">
        <h5 className="fw-bold mt-5 extra prices">Our Events</h5>
        <h2 className="fw-bold">Upcoming Events and Activities</h2>
        <p className="col-lg-7 mx-auto text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqu
        </p>
        <div className="upcoming-list mt-2">
          {upcomingEvents.map((event) => (
            <SubUpcoming key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
