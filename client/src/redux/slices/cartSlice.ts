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
  },
});

export const {
  setShowCart,
  setAmountOfCourses,
  coursesAddedToCart,
  totalCoursesPrice,
} = cartSlice.actions;
export default cartSlice.reducer;
