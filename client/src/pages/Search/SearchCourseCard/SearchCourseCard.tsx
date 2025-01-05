import courseImgPlaceholder from "/images/image.png";
import { LuDot } from "react-icons/lu";

const SearchCourseCard = () => {
  return (
    <div>
      <div className="flex justify-between items-start pb-[1.6em] w-full gap-[1em] cursor-pointer pt-[1.6em]">
        <div>
          <img src={courseImgPlaceholder} alt="" className="w-[260px]" />
        </div>
        <div className="flex flex-col items-start justify-start">
          <b>React - The Complete Guide 2024 (incl. Next.js, Redux)</b>
          <p className="text-[0.7em] w-[500px]">
            Dive in and learn <b>React</b> .js from scratch! Learn <b>React</b>,
            Hooks, Redux, <b>React</b> Router, Next.js, Best Practices and way
            more!
          </p>
          <p className="text-gray-500 text-[0.7em]">
            Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller
          </p>
          <div className="flex text-gray-500 text-[0.7em] items-center gap-[0.2em]">
            <b className="text-[1.2em] text-black">4.6</b>
            <p className="text-[1.2em] text-star">★★★★☆</p>
            <p>(222,759)</p>
          </div>
          <div className="flex text-gray-500 text-[0.7em] items-center">
            <p>71.5 total hours</p>
            <LuDot />
            <p>725 lectures</p>
            <LuDot />
            <p>All Levels</p>
          </div>
          <b className="text-[0.8em] bg-bestSellerTag p-[0.3em] rounded-[0.5em]">
            Bestseller
          </b>
        </div>
        <div className="col">
          <b>₪49.90</b>
          <p className="line-through text-gray-500 text-[0.9em]">₪369.90</p>
        </div>
      </div>
      <hr className="border border-gray-100 w-full" />
    </div>
  );
};

export default SearchCourseCard;
