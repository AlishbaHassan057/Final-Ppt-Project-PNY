import React from "react";

const AdminDashBoard = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between">
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
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
