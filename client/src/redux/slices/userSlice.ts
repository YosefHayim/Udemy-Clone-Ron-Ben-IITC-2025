import { UserState } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState: UserState = {
  fullName: "",
  profilePic: "",
  email: "",
  headline: "",
  bio: "",
  role: "",
  coursesBought: [],
  udemyCredits: 0,
  cookie: Cookies.get("cookie") || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
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
    setEmailAddress: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setHeadline: (state, action: PayloadAction<string>) => {
      state.headline = action.payload;
    },
    setCoursesBought: (
      state,
      action: PayloadAction<
        | {
            courseId: string;
            courseName: string;
            coursePrice: number;
            boughtAt: string;
          }
        | {
            courseId: string;
            courseName: string;
            coursePrice: number;
            boughtAt: string;
          }[]
      >
    ) => {
      if (!Array.isArray(action.payload)) {
        action.payload = [action.payload]; // Ensure it's always an array
      }

      // Create a Set of existing course IDs
      const existingIds = new Set(
        state.coursesBought.map((course) => course.courseId)
      );

      // Filter new courses that are not already in state.coursesBought
      const newCourses = action.payload.filter(
        (course) => !existingIds.has(course.courseId)
      );

      // Add only unique courses to the state
      state.coursesBought = [...state.coursesBought, ...newCourses];
    },

    setUdemyCredits: (state, action: PayloadAction<number>) => {
      state.udemyCredits = action.payload;
    },
    setCookie: (state, action: PayloadAction<string>) => {
      state.cookie = action.payload;
    },
    clearUser: (state) => {
      state.fullName = "";
      state.profilePic = "";
      state.email = "";
      state.bio = "";
      state.role = "";
      state.coursesBought = [];
      state.cookie = "";
    },
  },
});

export const {
  setFullName,
  setHeadline,
  setProfilePic,
  setRole,
  setBio,
  setEmailAddress,
  setCoursesBought,
  clearUser,
  setUdemyCredits,
  setCookie,
} = userSlice.actions;

export default userSlice.reducer;
