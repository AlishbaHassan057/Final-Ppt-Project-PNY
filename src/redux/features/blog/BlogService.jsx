import axios from "axios";

const base_url = "http://localhost:5175/api/blogs";

export const addBlog = async (formData) => {
  try {
    const response = await axios.post(`${base_url}/add-blog`, formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
export const getBlogs = async () => {
  const response = await axios.get(`${base_url}/get-blog`);
  return response.data;
};

export const blogService = {
  addBlog,
  getBlogs,
};
