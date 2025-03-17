import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Course {
  id: string;
  title: string;
  instructor: string;
}

export interface CourseState {
  courses: Course[];
}

const initialState: CourseState = {
  courses: [],
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    addCourse: (state, action: PayloadAction<Course>) => {
      state.courses.push(action.payload);
    },
    removeCourse: (state, action: PayloadAction<string>) => {
      state.courses = state.courses.filter(
        (course) => course.id !== action.payload
      );
    },
  },
});

export const { addCourse, removeCourse } = courseSlice.actions;
export default courseSlice.reducer;
