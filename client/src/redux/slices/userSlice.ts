import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of the user state
type User = {
  message?: string;
  status?: string;
};

// Define the initial state
const initialState: User | null = null;

// Create the slice
const userSlice = createSlice({
  name: "user", // Slice name
  initialState, // Initial state
  reducers: {
    setUser: (state, action: PayloadAction<User>) => action.payload, // Save user data
    clearUser: () => null, // Clear user data
  },
});

// Export actions to use in the app
export const { setUser, clearUser } = userSlice.actions;

// Export the reducer to add it to the store
export default userSlice.reducer;
