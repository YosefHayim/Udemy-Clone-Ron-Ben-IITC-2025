import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
  amountOfCourses: Number;
  coursesAddedToCart: [string];
  totalCoursesPrice: Number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    amountOfCourses: 0,
    coursesAddedToCart: [],
    totalCoursesPrice: Number,
  },
  reducers: {
    setAmountOfCourses: (state, action: PayloadAction<Cart>) => {
      //placeholder
    },
    coursesAddedToCart: (state, action: PayloadAction<string>) => {
      //placeholder
    },
    totalCoursesPrice: (state, action: PayloadAction<string>) => {
      //placeholder
    },
  },
});

export const { setAmountOfCourses, coursesAddedToCart, totalCoursesPrice } =
  cartSlice.actions;
export default cartSlice.reducer;
