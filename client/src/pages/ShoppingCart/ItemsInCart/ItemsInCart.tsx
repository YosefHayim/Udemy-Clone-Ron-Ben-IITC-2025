import ItemInCart from "@/components/Navbar/Cart/ItemInCart/ItemInCart";

const ItemsInCart = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[1em]">
      <div className="font-bold w-full flex flex-col items-start justify-start gap-[1.5em] mt-[1em]">
        <h1>Shopping Cart</h1>
        <h2>0 Courses in Cart</h2>
      </div>
      <hr className="w-full" />
    </div>
  );
};

export default ItemsInCart;
