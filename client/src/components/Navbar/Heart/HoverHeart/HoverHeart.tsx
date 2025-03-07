import { Link } from "react-router-dom";

const HoverHeart = () => {
  return (
    <div className="p-[1em] rounded-[0.8em] flex flex-col justify-center items-start border border-gray-300 w-[300px] bg-white z-[1000] absolute right-[0em] top-[1em] shadow-alertAlgoInfo cursor-pointer">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <p className="font-medium mb-[1em]">Your wishlist is empty.</p>
          <b className="text-purpleStatic hover:text-purpleHover cursor-pointer">
            <Link to="/">Explore courses</Link>
          </b>
        </div>
      </div>
    </div>
  );
};

export default HoverHeart;
