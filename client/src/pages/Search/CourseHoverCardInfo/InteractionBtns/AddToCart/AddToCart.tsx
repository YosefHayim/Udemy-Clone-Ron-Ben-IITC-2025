import { Button } from "@/components/ui/button";
import {
  coursesAddedToCart,
  setAmountOfCourses,
  totalCoursesPrice,
} from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

const AddToCart = ({ textBtn = "Add to cart", courseId, coursePrice }) => {
  if (!courseId && coursePrice) {
    return;
  }

  const dispatch = useDispatch();

  const handleClick = (e, courseId) => {
    console.log(`Course ID from button: ${courseId}`);
    dispatch(setAmountOfCourses());
    dispatch(totalCoursesPrice(coursePrice));
    dispatch(coursesAddedToCart(courseId));
  };

  return (
    <Button
      onClick={(e) => handleClick(e, courseId)}
      id={courseId}
      className={`font-bold bg-btnColor rounded-[0.2em] hover:bg-btnHoverColor w-full py-[1.5em] text-[1em]`}
    >
      {textBtn}
    </Button>
  );
};

export default AddToCart;
