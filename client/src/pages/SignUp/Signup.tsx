import registerUser from "@/api/users/registerUser";
import Loader from "@/components/Loader/Loader";
import { emailContext } from "@/routes/AppRoutes";
import { RegisterUserPayload } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { IoIosCheckmark } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  document.title = "Sign Up and Start Learning | Udemy";
  const navigate = useNavigate();

  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error("emailContext is not provided");
  const [emailUser, setEmailUser, userFullName, setUserFullName] = emailCtx;

  const mutation = useMutation<unknown, Error, RegisterUserPayload>({
    mutationFn: registerUser,
    onSuccess: () => {
      navigate("/verify-code");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    setEmailUser(email);
    setUserFullName(fullName);
    mutation.mutate({ fullName, email });
  };

  return (
    <div className="flex mt-[8em]">
      {/* Left Section with Image */}
      <div className="w-1/2 h-full mr-[-6rem] ml-[3rem] mt-[-3rem] flex items-center justify-center bg-white">
        <img
          src="/images/signup.png"
          alt="Sign Up Illustration"
          className="h-[90%] w-auto object-contain"
        />
      </div>

      {/* Right Section with Form */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-[27rem]">
          <h2 className="text-[2rem] font-bold text-[#303141] mb-6 w-full text-center">
            Sign up with email
          </h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            {/* Custom Checkbox */}
            <div className="flex items-start gap-2 cursor-pointer">
              {/* Checkbox */}
              <div
                onClick={handleCheckboxChange}
                className={`w-4 h-4 border-2 mt-1 rounded-[2px] flex items-center justify-center cursor-pointer transition-all ${
                  isChecked
                    ? "bg-[#6d28d2] border-[#6d28d2]"
                    : "bg-white border-[#303141]"
                }`}
                style={{ minWidth: "1rem", minHeight: "1rem" }} // Fixando o tamanho
              >
                {isChecked && <IoIosCheckmark className="text-white w-4 h-4" />}
              </div>

              {/* Label */}
              <label
                htmlFor="offers"
                className="text-sm cursor-pointer leading-5 mb-[1.6rem]"
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
              className="w-full py-3 rounded-md bg-[#6d28d2] hover:bg-[#892de1] text-white font-medium flex items-center justify-center space-x-0 h-[50px]"
            >
              {isLoading ? (
                <Loader useSmallLoading={true} hSize="" />
              ) : (
                <div className="flex flex-row">
                  <MdEmail className="w-5 h-5" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12h-9m6 0l-3-3m3 3l-3 3"
                  />

                  <span className="text-[1rem] font-bold">
                    Continue with email
                  </span>
                </div>
              )}
            </button>

            {/* Terms and Privacy */}
            <div className="flex justify-center px-0">
              <p className="text-[0.8rem] text-[#303141] mt-2">
                By signing up, you agree to our{" "}
                <span className="inline">
                  <a
                    className="text-purple-600 underline mr-[0.3rem] cursor-pointer"
                    onClick={() => navigate("/terms-of-use")}
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
            <a href="/login" className="text-[#303141] text-[1rem]">
              Already have an account?{" "}
              <span className="text-[#6d28d2] underline">Log in</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
