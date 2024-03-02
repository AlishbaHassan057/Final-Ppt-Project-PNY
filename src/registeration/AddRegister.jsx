import React, { useState } from "react";
import "./table.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewRegister } from "../redux/features/register/registerSlice";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const AddRegister = () => {
  const dispatch = useDispatch();
  const { reerror, resuccess } = useSelector((state) => state.register);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    title: "",
    dated: "",
    event_acc: "private",
    location: "",
    duration: "",
    number: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      username,
      email,
      title,
      dated,
      event_acc,
      location,
      duration,
      number,
    } = formData;

    if (
      !username ||
      !email ||
      !title ||
      !dated ||
      !event_acc ||
      !location ||
      !duration ||
      !number
    ) {
      toast.error("Please enter all fields!");
    } else {
      const userData = {
        username,
        email,
        title,
        dated,
        event_acc,
        location,
        duration,
        number,
      };

      if (reerror) {
        toast.error(reerror);
      }

      dispatch(addNewRegister(userData));
      setFormData({
        username: "",
        email: "",
        title: "",
        dated: "",
        event_acc: "private",
        location: "",
        duration: "",
        number: "",
      });
      // Show success message
      toast.success("Your event has been registered successfully!");
    }
  };

  return (
    <>
      <div className="regi">
        <div className="container blur-background text-white col-lg-4  px-4 py-3 border-1 rounded-1 border shadow p-3">
          <h2 className="text-white text-center fw-bold">Add Registration</h2>
          <form>
            <div>
              <label className="text-white fw-bold fw-bold">Name</label>
              <input
                className="form-control my-1 border-0"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="text-white fw-bold">Email</label>
              <input
                className="form-control my-1 border-0"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div>
              <label className="text-white fw-bold">Number</label>
              <input
                className="form-control my-1 border-0"
                type="string"
                name="number"
                value={formData.number}
                onChange={handleChange}
                placeholder="Number"
              />
            </div>
            <div>
              <label className="text-white fw-bold">Title</label>
              <input
                className="form-control my-1 border-0"
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Title"
              />
            </div>
            <div>
              <label className="text-white fw-bold">Event Date</label>
              <input
                className="form-control my-1 border-0"
                type="string"
                name="dated"
                value={formData.dated}
                onChange={handleChange}
                placeholder="Date"
              />
            </div>
            <div>
              <label className="mt-2 text-white fw-bold">
                Event Accessibility
              </label>
              <div className="d-flex justify-content-between gap-2 align-items-center ">
                <div className="d-flex justify-content-between py-2 align-items-center border rounded-1 mt-1 w-50 px-2">
                  <label className="m-0 p-0 align-self-center text-white">
                    Private
                  </label>
                  <input
                    type="radio"
                    name="event_acc"
                    value="private" // Change value to 'private'
                    onChange={handleChange}
                    className="text-white form-check align-self-start mt-1"
                  />
                </div>
                <div className="d-flex justify-content-between py-2 align-items-center border rounded-1 mt-1 w-50 px-2">
                  <label className="m-0 p-0 align-self-center text-white">
                    Public
                  </label>
                  <input
                    type="radio"
                    name="event_acc"
                    value="public"
                    onChange={handleChange}
                    className="form-check mt-1 align-self-start text-white"
                  />
                </div>
              </div>
              <label className="text-white fw-bold">Location</label>
              <input
                className="form-control my-2 border-0"
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
              />
            </div>
            <div>
              <label className="text-white fw-bold">Duration</label>
              <input
                className="form-control my-0 border-0"
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Duration"
              />
            </div>

            <br />
            <button
              onClick={handleSubmit}
              className="btn regbtn fw-bold w-100 mx-auto"
              type="submit"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddRegister;
