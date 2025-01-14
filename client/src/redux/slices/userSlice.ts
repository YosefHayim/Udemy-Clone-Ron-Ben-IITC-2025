import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the structure of the user state
type User = {
  fullName: string;
  profilePic: string;
  role: string;
};

// Create the slice
const userSlice = createSlice({
  name: "user", // Slice name
  initialState: {
    fullName: "",
    profilePic: "",
    email: "",
    bio: "",
    role: "",
  },
  reducers: {
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setProfilePic: (state, action: PayloadAction<string>) => {
      state.profilePic = action.payload;
    },
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    setBio: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    clearUser: (state) => {
      state.fullName = "";
      state.profilePic = "";
      state.role = "";
    },
  },
});

// Export actions to use in the app
export const { setFullName, setProfilePic, setRole, clearUser, setBio } =
  userSlice.actions;

// Export the reducer to add it to the store
export default userSlice.reducer;
