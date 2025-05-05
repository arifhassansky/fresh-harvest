// src/redux/productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Action to set the products
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    // Action to add a product
    addProduct: (state, action) => {
      state.products.push(action.payload);
    },
    // Action to update a product
    updateProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = action.payload;
      }
    },
    // Action to remove a product
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    // Action to handle loading state
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // Action to handle error state
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Export the actions
export const {
  setProducts,
  addProduct,
  updateProduct,
  removeProduct,
  setLoading,
  setError,
} = productSlice.actions;

// Export the reducer
export default productSlice.reducer;
