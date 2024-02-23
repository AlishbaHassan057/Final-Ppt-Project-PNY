// blogSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addBlog, getBlogs } from "./blogService";

const initialState = {
  blogs: [],
  loading: false,
  error: false,
};

export const addNewBlog = createAsyncThunk(
  "blogs/addNewBlog",
  async (formData) => {
    return await addBlog(formData);
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(addNewBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs.push(action.payload);
      })
      .addCase(addNewBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { blogs } = blogSlice.actions;
export default blogSlice.reducer;
