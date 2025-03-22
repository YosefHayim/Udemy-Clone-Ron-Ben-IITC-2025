import ItemInCart from "@/components/Navbar/Cart/ItemInCart/ItemInCart";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const ItemsInCart: React.FC = () => {
  const totalCoursesInCart = useSelector(
    (state: RootState) => state.cart.amountOfCourses,
  );
  const coursesIdAdded = useSelector(
    (state: RootState) => state.cart.coursesAddedToCart,
  );

  return (
    <div>
      <div className="flex w-full flex-col items-center justify-center gap-[1em]">
        <div className="mt-[1em] flex w-full flex-col items-start justify-start gap-[1.5em] font-sans font-extrabold">
          <h2>
            {totalCoursesInCart} {totalCoursesInCart > 1 ? "Courses" : "Course"}{" "}
            in Cart
          </h2>
        </div>
        <hr className="w-full" />
        {coursesIdAdded && coursesIdAdded.length > 0 ? (
          coursesIdAdded.map((courseId) => (
            <ItemInCart
              key={courseId}
              courseId={courseId}
              itemsPosition="baseline"
              courseImgSize={`h-[5em] w-[8em]`}
            />
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ItemsInCart;
