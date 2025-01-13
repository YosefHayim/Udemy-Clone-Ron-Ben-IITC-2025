import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
  amountOfCourses: Number;
  coursesAddedToCart: [string];
  totalCoursesPrice: Number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isShowCart: false,
    amountOfCourses: 0,
    coursesAddedToCart: [],
    totalCoursesPrice: 0,
  },
  reducers: {
    setShowCart: (state, action: PayloadAction<boolean>) => {
      state.isShowCart = action.payload;
    },
    setAmountOfCourses: (state) => {
      state.amountOfCourses += 1;
    },
    coursesAddedToCart: (state, action: PayloadAction<string>) => {
      state.coursesAddedToCart.push(action.payload);
    },
    totalCoursesPrice: (state, action: PayloadAction<number>) => {
      state.totalCoursesPrice += action.payload;
    },
    removeCourseFromCart: (
      state,
      action: PayloadAction<{ courseId: string; coursePrice: number }>
    ) => {
      const { courseId, coursePrice } = action.payload;

      // Remove the course ID from the cart
      state.coursesAddedToCart = state.coursesAddedToCart.filter(
        (id) => id !== courseId
      );

      // Decrease the number of courses
      if (state.amountOfCourses > 0) {
        state.amountOfCourses -= 1;
      }

      // Subtract the course price from the total
      state.totalCoursesPrice -= coursePrice;
      if (state.totalCoursesPrice < 0) {
        state.totalCoursesPrice = 0; // Prevent negative values
      }
    },
  },
});

export const {
  setShowCart,
  setAmountOfCourses,
  coursesAddedToCart,
  totalCoursesPrice,
  removeCourseFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
