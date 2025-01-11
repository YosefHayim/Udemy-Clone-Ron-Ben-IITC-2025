import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "/images/udemy-not-found.png";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[1em] p-[2em]">
      <div>
        <img src={notFoundImg} alt="Not found image" className="h-[30em]" />
      </div>
      <div className="text-center text-[0.8em]">
        <h1>We can’t find the page you’re</h1>
        <h1>looking for</h1>
      </div>
      <div>
        <p>
          Visit our
          <Link
            to="/"
            className="underline text-[#5022c3] cursor-pointer mx-[0.5em]"
          >
            support page
          </Link>
          for further assistance.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
