import React from "react";
import { Link } from "react-router-dom";

const TermsOfUseP = () => {
  return (
    <div className="flex justify-center px-0">
      <p className="mt-2 text-courseNameColorTxt">
        By signing up, you agree to our{" "}
        <Link
          className="mr-[0.3rem] cursor-pointer text-purple-600
        underline"
          to={`/terms-of-use`}
        >
          Terms of Use
        </Link>
        <span className="inline">
          and{" "}
          <Link
            className="mr-[0.3rem] cursor-pointer text-purple-600
        underline"
            to={`/terms-of-use`}
          >
            Privacy Policy
          </Link>
        </span>
      </p>
    </div>
  );
};

export default TermsOfUseP;
