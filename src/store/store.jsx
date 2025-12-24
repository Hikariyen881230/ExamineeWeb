import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./slice/LayoutSlice.js";

export const Store=configureStore({
  reducer:{
    layoutTodos:layoutReducer,
  }
});