import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { blogService } from "./blogService";

const initialState = {
  loading: false,
  error: false,
  success: false,
  message: "",
  data: null,
};

export const addNewBlog = createAsyncThunk(
  "blogs/addNewBlog",
  async (data, thunkAPI) => {
    try {
      return await blogService.addBlog(data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        const message = error.response.data.error;
        return thunkAPI.rejectWithValue(message);
      } else {
        return thunkAPI.rejectWithValue(
          "An error occurred during the blog addition process"
        );
      }
    }
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    reset: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
      state.message = "";
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewBlog.pending, (state) => {
        state.loading = true;
      })
      .addCase(addNewBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.data = action.payload; // Set the data to the payload
      })
      .addCase(addNewBlog.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.message = action.payload;
      });
  },
});

export const { blogs, reset } = blogSlice.actions;
export default blogSlice.reducer;
