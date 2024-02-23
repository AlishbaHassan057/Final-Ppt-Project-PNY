import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./blogSlice";
import SubBlogs from "./SubBlogs";

const Blog = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

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
