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
      <div className="d-flex  justify-content-between">
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
            <h3 className="fw-bold ms-3 text-white mt-3">Home</h3>
            <h3 className="fw-bold ms-3 text-white mt-3">Add Events</h3>
            <h3 className="fw-bold ms-3 text-white mt-3">
              <a href="/add-blog" className="text-white text-decoration-none">
                Add Blogs
              </a>
            </h3>

            <h3 className="fw-bold ms-3 text-white mt-3">Edit Blogs</h3>
            <h3 className="fw-bold ms-3 text-white mt-3">View Reviews</h3>
            <h3 className="fw-bold ms-3 text-white mt-3">Add Admin</h3>
          </div>
        </div>
        <div className="articles">
          <button onClick={handleLogout} className="logout-button">
            LOGOUT
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
