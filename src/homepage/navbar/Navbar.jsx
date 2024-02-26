import React, { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <div className="container-fluid navv">
        <div className="nav-w d-flex gap-0 align-items-center justify-content-between text-white py-3">
          <div className="logo-brand">
            <img
              style={{ width: "200px" }}
              src="https://templatekit.jegtheme.com/evenizer/wp-content/uploads/sites/146/2021/08/Evenizer-logo-2.png"
              alt="Brand Logo"
            />
          </div>

          <div className="hamburger-icon d-lg-none">
            <FaBars
              size={24}
              onClick={toggleSidebar}
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="regular-items d-none d-lg-flex align-items-center">
            <ul className="navlinks list-unstyled d-flex align-items-center gap-4 p-0 m-0">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/aboutus">ABOUT US</Link>
              </li>
              <li>
                <Link to="/services">SERVICES</Link>
              </li>
              <li>
                <Link to="/blog">BLOGS</Link>
              </li>
              <li>
                <Link to="/login">ADMIN</Link>
              </li>
            </ul>
          </div>

          {showSidebar && (
            <div className="sidebar">
              <ul className="list-unstyled d-flex flex-column gap-4 p-0 m-0">
                <li>
                  <Link to="/" onClick={toggleSidebar}>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/aboutus" onClick={toggleSidebar}>
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/services" onClick={toggleSidebar}>
                    SERVICES
                  </Link>
                </li>
                <li>
                  <Link to="/page" onClick={toggleSidebar}>
                    BLOGS
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={toggleSidebar}>
                    SIGNUP
                  </Link>
                </li>
              </ul>
            </div>
          )}

          <div className="d-none d-lg-flex align-items-center justify-content-between gap-4">
            <div>
              <FaSearch size={20} />
            </div>
            <div className="button">
              <Link to="/contact">
                <button className="btn text-light px-4 rounded-3 fw-bold">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
