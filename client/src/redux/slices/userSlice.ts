import { Course, CourseProgress } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export interface UserState {
  isUserLoaded: boolean; // ✅ Adicionado
  fullName: string;
  profilePic: string;
  email: string;
  headline: string;
  bio: string;
  role: string;
  language: string;
  userLinks: {
    linkedin: string;
    xPlatform: string;
    facebook: string;
    youtube: string;
    website: string;
  };
  coursesBought: Course[];
  udemyCredits: number;
  cookie: string | null;
  isLoggedPreviouslyWithGoogle: boolean;
  isAuthActivated: boolean;
  whenCreated: Date | null;
  coursesInProgress: CourseProgress[];
  updatedAt: Date | null;
}

const initialState: UserState = {
  isUserLoaded: false, // ✅ Inicializado
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
  whenCreated: null,
  updatedAt: null,
  coursesInProgress: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoaded: (state, action: PayloadAction<boolean>) => {
      state.isUserLoaded = action.payload;
    },
    setIsLoggedWithGoogle: (state, action: PayloadAction<boolean>) => {
      state.isLoggedPreviouslyWithGoogle = action.payload;
    },
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setProfilePic: (state, action: PayloadAction<string>) => {
      state.profilePic = action.payload;
    },
    setUserLinks: (state, action: PayloadAction<Partial<UserState["userLinks"]>>) => {
      state.userLinks = { ...state.userLinks, ...action.payload };
    },
    setCreatedAt: (state, action: PayloadAction<Date | undefined | null>) => {
      state.whenCreated = action.payload;
    },
    setUpdatedAt: (state, action: PayloadAction<Date | undefined | null>) => {
      state.updatedAt = action.payload;
    },
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    setBio: (state, action: PayloadAction<string>) => {
      state.bio = action.payload;
    },
    setAuthActivate: (state, action: PayloadAction<boolean>) => {
      state.isAuthActivated = action.payload;
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
    setCoursesInProgress: (state, action: PayloadAction<CourseProgress[]>) => {
      state.coursesInProgress = action.payload;
    },
    setCoursesBought: (state, action: PayloadAction<Course[]>) => {
      action.payload.forEach((newCourse) => {
        if (!state.coursesBought.some((course) => course.courseId === newCourse.courseId)) {
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
      state.profilePic = "";
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
      state.isUserLoaded = false; // Zera também ao sair
    },
  },
});

export const {
  setUserLinks,
  setLanguage,
  setFullName,
  setHeadline,
  setUpdatedAt,
  setProfilePic,
  setRole,
  setBio,
  setEmailAddress,
  setCoursesBought,
  clearUser,
  setUdemyCredits,
  setCookie,
  setIsLoggedWithGoogle,
  setAuthActivate,
  setAuth,
  setCoursesInProgress,
  setCreatedAt,
  setUserLoaded,
} = userSlice.actions;

export default userSlice.reducer;
