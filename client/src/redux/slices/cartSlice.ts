import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    isShowCart: false,
    amountOfCourses: 0,
    coursesAddedToCart: [],
    totalCourseDiscountPrices: 0,
    totalCoursesOriginalPrices: 0,
  },

  reducers: {
    setShowCart: (state, action: PayloadAction<boolean>) => {
      state.isShowCart = action.payload;
    },
    setAmountOfCourses: (state) => {
      state.amountOfCourses += 1;
    },
    setAddCourseToCart: (state, action: PayloadAction<string>) => {
      // Prevent duplicate course additions
      state.coursesAddedToCart = Array.from(
        new Set([...state.coursesAddedToCart, action.payload])
      );
    },
    setTotalOriginalCoursePrices: (state, action: PayloadAction<number>) => {
      if (!action.payload || isNaN(action.payload)) {
        console.error("Invalid fullPrice payload:", action.payload);
        return;
      }
      state.totalCoursesOriginalPrices += action.payload; // Add original price
    },

    setTotalCourseDiscountPrices: (state, action: PayloadAction<number>) => {
      if (!action.payload || isNaN(action.payload)) {
        console.error("Invalid discountPrice payload:", action.payload);
        return;
      }
      state.totalCourseDiscountPrices += action.payload; // Add discounted price
    },
    removeCourseFromCart: (
      state,
      action: PayloadAction<{
        courseId: string;
        originalPrice?: number; // Mark as optional for flexibility
        discountPrice?: number; // Mark as optional for flexibility
      }>
    ) => {
      const { courseId, originalPrice = 0, discountPrice = 0 } = action.payload;

      // Validate the payload
      if (!courseId) {
        console.error("Invalid courseId:", courseId);
        return;
      }

      // Remove the course ID from the cart
      state.coursesAddedToCart = state.coursesAddedToCart.filter(
        (id) => id !== courseId
      );

      // Decrease the amount of courses
      if (state.amountOfCourses > 0) {
        state.amountOfCourses -= 1;
      }

      // Update the total original and discount prices
      state.totalCoursesOriginalPrices = Math.max(
        0,
        state.totalCoursesOriginalPrices - originalPrice
      );

      state.totalCourseDiscountPrices = Math.max(
        0,
        state.totalCourseDiscountPrices - discountPrice
      );

      // Reset totals if the cart is empty
      if (state.coursesAddedToCart.length === 0) {
        state.totalCoursesOriginalPrices = 0;
        state.totalCourseDiscountPrices = 0;
        state.amountOfCourses = 0;
      }
    },
  },
});

export const {
  setShowCart,
  setAmountOfCourses,
  setAddCourseToCart,
  setTotalOriginalCoursePrices,
  setTotalCourseDiscountPrices,
  removeCourseFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
