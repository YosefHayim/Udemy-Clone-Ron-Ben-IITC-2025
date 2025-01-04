import { IoFilterOutline } from "react-icons/io5";
import courseImgPlaceholder from "/images/image.png";
import { LuDot } from "react-icons/lu";

const SearchPage = () => {
  return (
    <div>
      <h1>10,000 results for "react"</h1>
      <div className="flex">
        <div className="flex items-center px-[0.5em] py-[1em] border border-black rounded-md w-min cursor-pointer">
          <IoFilterOutline />
          <b className="font-bold text-base leading-[1.2] ml-[0.4em]">Filter</b>
        </div>
        <div className="flex flex-col items-center">
          <select className="block w-full h-12 border border-gray-900 rounded-md bg-white text-gray-900 font-normal text-base leading-[1.4] px-4 pr-12 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="most-relevant">Most Relevant</option>
            <option value="most-reviewed">Most Reviewed</option>
            <option value="highest-rated">Highest Rated</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>
      {/* course example card */}
      <div className="flex justify-between items-start pb-[1.6em] w-full gap-[1em] cursor-pointer">
        <div>
          <img src={courseImgPlaceholder} alt="" className="w-[260px]" />
        </div>
        <div>
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
            <p>725 Lectures</p>
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
      <hr />
    </div>
  );
};

export default SearchPage;
