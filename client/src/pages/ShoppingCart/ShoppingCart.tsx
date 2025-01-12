import CheckoutContainer from "./CheckoutContainer/CheckoutContainer";
import EmptyCart from "./EmptyCart/EmptyCart";
import ItemsInCart from "./ItemsInCart/ItemsInCart";

const ShoppingCart = () => {
  return (
    <div className="p-[1em]">
      <div className="w-[1200px] flex flex-row items-start justify-start">
        <div className="flex flex-row items-baseline justify-center gap-[2em] w-full">
          <ItemsInCart />
          <CheckoutContainer />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
