import React, { useEffect } from "react";
import "./subblog.css";
import SubBlogs from "./SubBlogs";
import Navbar from "../homepage/navbar/Navbar";
import blogsData from "./blogsData";

const Blog = () => {
  return (
    <>
      <Navbar />

      <div className="background-container">BLOGS</div>
      <div className="container mt-5 mx-auto w-75">
        <div className="row justify-content-center">
          {blogsData.map((blog) => (
            <div key={blog.id} className="col-lg-6 mb-4">
              <SubBlogs data={blog} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
