import { useSelector } from "react-redux";
import CheckoutContainer from "./CheckoutContainer/CheckoutContainer";
import EmptyCart from "./EmptyCart/EmptyCart";
import ItemsInCart from "./ItemsInCart/ItemsInCart";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import Loader from "@/components/Loader/Loader";

const ShoppingCart: React.FC = () => {
  const [loading, setLoading] = useState(true);
  document.title = "Cart | Udemy";

  const countOfCourses = useSelector(
    (state: RootState) => state.cart.amountOfCourses,
  );

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  return (
    <div>
      {loading ? (
        <Loader hSize="1000px" useSmallLoading={false} />
      ) : (
        <div className="flex w-full flex-row items-center justify-center p-[1em]">
          <div className="flex w-full flex-row items-start justify-start">
            <div className="flex w-full flex-row items-baseline justify-center gap-[2em]">
              {countOfCourses === 0 ? (
                <EmptyCart />
              ) : (
                <div className="flex w-full flex-row-reverse items-start justify-center">
                  <div className="flex flex-col">
                    <h1 className="mb-4 font-bold">Shopping Cart</h1>
                    <div className="flex flex-row-reverse gap-10">
                      <CheckoutContainer />
                      <ItemsInCart />
                    </div>
                  </div>
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
