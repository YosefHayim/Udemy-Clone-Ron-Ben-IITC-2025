import { useSelector } from "react-redux";
import CheckoutContainer from "./CheckoutContainer/CheckoutContainer";
import EmptyCart from "./EmptyCart/EmptyCart";
import ItemsInCart from "./ItemsInCart/ItemsInCart";
import { RootState } from "@/redux";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";

const ShoppingCart: React.FC = () => {
  const [loading, setLoading] = useState(true);
  document.title = "Cart | Udemy";

  const countOfCourses = useSelector(
    (state: RootState) => state.cart.amountOfCourses
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div>
      {loading ? (
        <Loader hSize="200px" useSmallLoading={false} />
      ) : (
        <div className="p-[1em] flex flex-row items-center justify-center">
          <div className="w-[1200px] flex flex-row items-start justify-start">
            <div className="flex flex-row items-baseline justify-center gap-[2em] w-full">
              {countOfCourses === 0 ? (
                <EmptyCart />
              ) : (
                <div className="flex flex-row-reverse items-start justify-between gap-[2em]">
                  <CheckoutContainer /> <ItemsInCart />
                  <p></p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
