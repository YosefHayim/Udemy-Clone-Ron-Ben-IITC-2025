import ItemInCart from "@/components/Navbar/Cart/ItemInCart/ItemInCart";

const ShoppingCart = () => {
  return (
    <div className="w-[1200px]">
      <div className="flex flex-col items-center justify-start p-[1em] w-full">
        <h1 className="font-bold mb-[1em]">Shopping Cart</h1>
        <h2 className="font-bold">2 Courses in Cart</h2>
        <div>
          <ItemInCart />
          <ItemInCart />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
