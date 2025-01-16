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
        originalPrice: number;
        discountPrice: number;
      }>
    ) => {
      const { courseId, originalPrice, discountPrice } = action.payload;

      // Remove the course ID from the cart
      state.coursesAddedToCart = state.coursesAddedToCart.filter(
        (id) => id !== courseId
      );

      // Decrease amount of courses
      if (state.amountOfCourses > 0) {
        state.amountOfCourses -= 1;
      }

      // Update the total original and discount prices
      state.totalCoursesOriginalPrices -= originalPrice;
      state.totalCourseDiscountPrices -= discountPrice;

      // Prevent negative values
      if (state.totalCoursesOriginalPrices < 0) {
        state.totalCoursesOriginalPrices = 0;
      }
      if (state.totalCourseDiscountPrices < 0) {
        state.totalCourseDiscountPrices = 0;
      }

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
