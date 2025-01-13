import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
  id: string;
  title: string;
  instructor: string;
}

interface CourseState {
  courses: Cart[];
}

const courseSlice = createSlice({
  name: "cart",
  initialState: {},
  reducers: {
    addCourse: (state, action: PayloadAction<Cart>) => {
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
