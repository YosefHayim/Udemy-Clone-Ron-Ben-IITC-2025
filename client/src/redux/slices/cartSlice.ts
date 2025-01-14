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
      action: PayloadAction<{
        courseId: string;
        coursePrice: number;
        amountToRemove: number;
      }>
    ) => {
      const { courseId, coursePrice, amountToRemove } = action.payload;

      // Remove the course ID from the cart
      state.coursesAddedToCart = state.coursesAddedToCart.filter(
        (id) => id !== courseId
      );

      // Ensure the course quantity is reduced correctly
      if (state.amountOfCourses > 0) {
        state.amountOfCourses -= amountToRemove;
        if (state.amountOfCourses < 0) {
          state.amountOfCourses = 0; // Prevent negative quantity
        }
      }

      // Update the total course price
      state.totalCoursesPrice -= coursePrice * amountToRemove;
      if (state.totalCoursesPrice < 0) {
        state.totalCoursesPrice = 0; // Prevent negative price
      }

      // Explicitly reset the total price if the cart is empty
      if (state.coursesAddedToCart.length === 0) {
        state.totalCoursesPrice = 0;
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
