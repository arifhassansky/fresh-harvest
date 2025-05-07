import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch a single product by ID
export const fetchSingleProduct = createAsyncThunk(
  "singleProduct/fetchSingleProduct",
  async (id) => {
    const response = await axios.get(
      `https://code-commando.com/api/v1/products/${id}`
    );
    return response.data.data;
  }
);

const singleProductSlice = createSlice({
  name: "singleProduct",
  initialState: {
    product: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSingleProduct: (state) => {
      state.product = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearSingleProduct } = singleProductSlice.actions;
export default singleProductSlice.reducer;
