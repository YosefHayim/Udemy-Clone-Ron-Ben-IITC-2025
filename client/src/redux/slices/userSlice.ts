import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { UserState } from "../../types/types";

const initialState: UserState = {
  fullName: "",
  profilePic: "",
  email: "",
  headline: "",
  bio: "",
  role: "",
  language: "english",
  userLinks: {
    linkedin: "",
    xPlatform: "",
    facebook: "",
    youtube: "",
    website: "",
  },
  coursesBought: [],
  udemyCredits: 0,
  cookie: localStorage.getItem("cookie") || Cookies.get("cookie"),
  isLoggedPreviouslyWithGoogle: false,
  isAuthActivated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoggedWithGoogle: (state, action: PayloadAction<boolean>) => {
      state.isLoggedPreviouslyWithGoogle = action.payload;
    },
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setProfilePic: (state, action: PayloadAction<string>) => {
      state.profilePic = action.payload;
    },
    setUserLinks: (
      state,
      action: PayloadAction<Partial<UserState["userLinks"]>>
    ) => {
      state.userLinks = { ...state.userLinks, ...action.payload };
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
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setCoursesBought: (state, action: PayloadAction<Course[]>) => {
      action.payload.forEach((newCourse) => {
        if (
          !state.coursesBought.some(
            (course) => course.courseId === newCourse.courseId
          )
        ) {
          state.coursesBought.push(newCourse);
        }
      });
    },
    setUdemyCredits: (state, action: PayloadAction<number>) => {
      state.udemyCredits = action.payload;
    },
    setCookie: (state, action: PayloadAction<string>) => {
      state.cookie = action.payload;
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuthActivated = action.payload;
    },
    clearUser: (state) => {
      state.fullName = "";
      state.profilePic = "";
      state.email = "";
      state.headline = "";
      state.bio = "";
      state.role = "";
      state.language = "english";
      state.userLinks = {
        linkedin: "",
        xPlatform: "",
        facebook: "",
        youtube: "",
        website: "",
      };
      state.coursesBought = [];
      state.udemyCredits = 0;
      state.cookie = "";
    },
  },
});

export const {
  setUserLinks,
  setLanguage,
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
  setIsLoggedWithGoogle,
  setAuth,
} = userSlice.actions;

export default userSlice.reducer;
