import React, { useEffect } from "react";
import "./dashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../redux/features/auth/authSlice";

const AdminDashBoard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
  };

  useEffect(() => {
    if (!user) {
      navigate("/"); // Navigate to the root if user is not logged in
    }
  }, [user, navigate]);

  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="sidebarr">
          <div
            className=""
            style={{
              width: "25vw",
              height: "100vh",
              backgroundColor: "purple",
            }}
          >
            <h1 className="fw-bold ms-3 text-white">Welcome Admin! </h1>
            <h1 className="fw-bold ms-3 text-white"> </h1>
            <h3 className="fw-bold ms-3 text-white mt-3">
              <a href="/" className="text-white text-decoration-none">
                Home
              </a>
            </h3>
            <h3 className="fw-bold ms-3 text-white mt-3">
              <a href="/add-blog" className="text-white text-decoration-none">
                Add Blogs
              </a>
            </h3>
            <h3 className="fw-bold ms-3 text-white mt-3">
              <a href="/services" className="text-white text-decoration-none">
                Add Events
              </a>
            </h3>

            <h3 className="fw-bold ms-3 text-white mt-3">
              <a href="/" className="text-white text-decoration-none">
                View Reviews
              </a>
            </h3>
            <h3 className="fw-bold ms-3 text-white mt-3">
              <a href="/login" className="text-white text-decoration-none">
                View Reviews
              </a>
            </h3>
          </div>
        </div>
        <div className="articles">
          <div
            className="container art shadow col-lg-12 mt-2 py-5 mx-5  text-center rounded bg-secondary text-white"
            style={{ width: "80%" }}
          >
            <h2 className="fw-bold mb-3 text-center">Admin Profile</h2>
            <h4 className="fw-bold"> {user?.f_name}</h4>

            <h6 className="fw-bold">{user?.p_mail}</h6>

            <h6 className="fw-bold">{user?.gender}</h6>

            <button
              onClick={handleLogout}
              className="logout-button mt-3 d-block mx-auto"
            >
              LOGOUT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
