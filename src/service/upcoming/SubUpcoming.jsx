// SubUpcoming.js
import React from "react";

const SubUpcoming = ({ event }) => {
  const { image, title, date, timings, location, category } = event;

  return (
    <div className="subb-upcoming row">
      <div className="col-lg-6">
        <div className="imagess-container">
          <img src={image} alt="Event" className="event-image w-100" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="event-details">
          <h2>{title}</h2>
          <p>Date: {date}</p>
          <p>Timings: {timings}</p>
          <p>Location: {location}</p>
          <p>Category: {category}</p>
        </div>
      </div>
    </div>
  );
};

export default SubUpcoming;
