import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"; // Import the user slice reducer

// Create the Redux store
const store = configureStore({
  reducer: {
    user: userReducer, // Add the user slice reducer
  },
});

// Export the store and types for TypeScript
export type RootState = ReturnType<typeof store.getState>; // RootState type
export type AppDispatch = typeof store.dispatch; // AppDispatch type
export default store;
