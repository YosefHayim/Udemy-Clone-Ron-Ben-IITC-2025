import AddToCart from "./AddToCart/AddToCart";
import HeartBtn from "./HeartBtn/HeartBtn";

const InteractionsBtns = () => {
  return (
    <div className="flex items-center justify-start w-full gap-[0.5em] mt-[1em]">
      <AddToCart />
      <HeartBtn iconSize={"2em"} />
    </div>
  );
};

export default InteractionsBtns;
