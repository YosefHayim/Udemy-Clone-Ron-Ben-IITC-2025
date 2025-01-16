import { useSelector } from "react-redux";
import CheckoutContainer from "./CheckoutContainer/CheckoutContainer";
import EmptyCart from "./EmptyCart/EmptyCart";
import ItemsInCart from "./ItemsInCart/ItemsInCart";
import { RootState } from "@/redux";

const ShoppingCart: React.FC = () => {
  document.title = "Cart | Udemy";

  const countOfCourses = useSelector(
    (state: RootState) => state.cart.amountOfCourses
  );

  return (
    <div className="p-[1em] flex flex-row items-center justify-center">
      <div className="w-[1200px] flex flex-row items-start justify-start">
        <div className="flex flex-row items-baseline justify-center gap-[2em] w-full">
          {countOfCourses === 0 ? (
            <EmptyCart />
          ) : (
            <div className="flex flex-row-reverse items-start justify-between gap-[2em]">
              <CheckoutContainer /> <ItemsInCart />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
