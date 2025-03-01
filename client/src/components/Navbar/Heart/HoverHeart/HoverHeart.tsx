import { Link } from "react-router-dom";

const HoverHeart = () => {
  return (
    <div className="p-[1em] rounded-[1em] text-[0.5em] flex flex-col justify-center items-start border border-gray-300 w-[300px] bg-white z-[1000] absolute right-[0em] top-[1em] shadow-previewCourseCardShadow cursor-pointer">
      <div className="w-full">
        <div className="flex flex-col items-center justify-center w-full text-center mt-[1em]">
          <p className="text-grayNavbarTxt font-light mb-[1em]">
            Your wishlist is empty.
          </p>
          <b className="text-purpleStatic hover:text-purpleHover cursor-pointer">
            <Link to="/">Keep shopping</Link>
          </b>
        </div>
      </div>
    </div>
  );
};

export default HoverHeart;
