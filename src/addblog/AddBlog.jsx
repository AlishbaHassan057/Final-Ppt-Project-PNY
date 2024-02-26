import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewBlog } from "../redux/features/blog/blogSlice";

const AddBlog = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "",
    dated: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, dated, description } = formData;
    const newBlog = {
      title,
      dated,
      description,
    };
    dispatch(addNewBlog(newBlog));
    setFormData({
      title: "",
      dated: "",
      description: "",
    });
  };

  return (
    <>
      <form className="col-lg-5 border px-5 py-3 mx-auto mt-5">
        <h2 className="fw-bold text-center">Add New Blog</h2>
        <div>
          <label className="fw-bold mt-2 fs-5">Title:</label>
          <input
            className="form-control"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="fw-bold mt-2 fs-5">Dated:</label>
          <input
            className="form-control"
            type="text"
            name="dated"
            value={formData.dated}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description" className="fw-bold mt-2 fs-5">
            Description:
          </label>
        </div>
        <div>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={5}
            cols={59}
          />
        </div>

        <button onClick={handleSubmit} type="submit" className="btn mt-2">
          Submit
        </button>
      </form>
    </>
  );
};

export default AddBlog;
