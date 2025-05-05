import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async (_, { getState }) => {
    const token = getState().auth.token;
    const res = await axios.get("http://localhost:3001/api/v1/category", {
      headers: { Authorization: token },
    });
    return res.data.data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;
