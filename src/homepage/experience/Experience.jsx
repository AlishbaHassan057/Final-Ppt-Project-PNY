import React, { useEffect } from "react";
import { PiHandshakeFill } from "react-icons/pi";
import { FaRegFaceLaughBeam } from "react-icons/fa6";
import { BsHandThumbsUp } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import "./exp.css";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const Experience = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <div className="container-fluid exp-iimagess mt-5">
        <div className="prove row  mb-5 mx-auto text-center text-white align-items-center justify-content-around mt-5">
          <div className="col-lg-3 mt-5" data-aos="fade-up">
            <div className="prove d-flex flex-column justify-content-start align-items-center mx-auto text-center text-white mt-2">
              <PiHandshakeFill size={50} color="purple" />
              <div className="d-flex align-items-center justify-content-around gap-2">
                <div className="digitsss">
                  <h2 className="mt-2">125</h2>
                </div>
                <div className="digits-iw">
                  <FaPlus size={13} color="purple" />
                </div>
              </div>
              <h6 className="fw-bold">Projects Done</h6>
            </div>
          </div>
          <div className="col-lg-3 mt-5" data-aos="fade-up">
            <div className="d-flex flex-column justify-content-start align-items-center mt-2">
              <FaRegFaceLaughBeam size={50} color="purple" />
              <div className="d-flex align-items-center justify-content-around gap-2">
                <div className="digits-iw">
                  <h2 className="mt-2">200</h2>{" "}
                </div>
                <div className="digits-iw">
                  <FaPlus size={13} color="purple" />
                </div>
              </div>
              <h6 className="fw-bold">Customer Happy</h6>
            </div>
          </div>
          <div className="col-lg-3 mt-5" data-aos="fade-up">
            <div className="d-flex flex-column justify-content-start align-items-center mt-2">
              <BsHandThumbsUp size={50} color="purple" />
              <div className="d-flex align-items-center justify-content-around gap-2">
                <div className="digits-iw">
                  {" "}
                  <h2 className="mt-2">199</h2>{" "}
                </div>
                <div className="digits-iw">
                  <FaPlus size={13} color="purple" />
                </div>
              </div>
              <h6 className="fw-bold">Service Guarantee</h6>
            </div>
          </div>
          <div className="col-lg-3 mt-5" data-aos="fade-up">
            <div className="d-flex flex-column justify-content-start align-items-center mt-2">
              <IoIosPeople size={50} color="purple" />
              <div className="d-flex align-items-center justify-content-around gap-2">
                <div className="digits-iw">
                  <h2 className="mt-2">99 </h2>{" "}
                </div>
                <div className="digits-iw">
                  <FaPlus size={13} color="purple" />
                </div>
              </div>
              <h6 className="fw-bold">Team Experts</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
