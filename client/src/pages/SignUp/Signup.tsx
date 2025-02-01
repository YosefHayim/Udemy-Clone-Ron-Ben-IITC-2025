import React, { useState } from "react";
import { IoIosCheckmark } from "react-icons/io";

const SignUp: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="flex mt-[5em]">
      {/* Left Section with Image */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <img
          src="/images/signup.png"
          alt="Sign Up Illustration"
          className="h-[90%] w-auto object-contain"
        />
      </div>

      {/* Right Section with Form */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-[27rem]">
          <h2 className="text-3xl font-bold text-[#303141] mb-6 w-full text-center">
            Sign up with email
          </h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            {/* Custom Checkbox */}
            <div className="flex items-center gap-2 cursor-pointer">
              <div
                onClick={handleCheckboxChange}
                className={`w-6 h-6 border-2 rounded-md flex items-center justify-center cursor-pointer transition ${
                  isChecked
                    ? "bg-purple-600 border-purple-600"
                    : "bg-white border-gray-400"
                }`}
              >
                {isChecked && <IoIosCheckmark className="text-white w-5 h-5" />}
              </div>
              <label
                htmlFor="offers"
                className="text-sm cursor-pointer"
                onClick={handleCheckboxChange}
              >
                Send me special offers, personalized recommendations, and
                learning tips.
              </label>
            </div>

            {/* Full Name Input */}
            <input
              type="text"
              id="fullName"
              name="fullName"
              required={true}
              placeholder="Full name"
              className="w-full p-[1em] bg-white border border-[#9194ac] rounded-[0.3em] py-[1.5em] placeholder:font-bold placeholder:text-[#303141] focus:border-purple-800"
            />

            {/* Email Input */}
            <input
              required={true}
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className="w-full p-[1em] bg-white border border-[#9194ac] rounded-[0.3em] py-[1.5em] placeholder:font-bold placeholder:text-[#303141] focus:border-purple-800"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#6d28d2] hover:bg-[#892de1] text-white font-medium flex items-center justify-center space-x-0"
            >
              <span className="text-[1rem] font-bold">Continue with email</span>
            </button>

            {/* Terms and Privacy */}
            <div className="flex justify-center px-0">
              <p className="text-[0.8rem] text-gray-500 mt-2">
                By signing up, you agree to our{" "}
                <span className="inline">
                  <a
                    href="/terms"
                    className="text-purple-600 underline mr-[0.3rem]"
                  >
                    Terms of Use
                  </a>
                  and{" "}
                  <a href="/privacy" className="text-purple-600 underline">
                    Privacy Policy
                  </a>
                </span>
                .
              </p>
            </div>
          </form>

          {/* Login Redirect */}
          <div className="bg-[#f6f7f9] mt-6 text-center w-full py-[1.5em] text-white font-medium flex items-center justify-center space-x-0">
            <a href="/login" className="text-gray-800">
              Already have an account?{" "}
              <span className="text-purple-600 underline">Log in</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
