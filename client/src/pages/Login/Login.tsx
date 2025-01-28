import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import Cookies from "js-cookie";
import loginUser from "@/api/users/loginUser";
import { jwtDecode } from "jwt-decode";
import {
  setBio,
  setCookie,
  setCoursesBought,
  setEmailAddress,
  setFullName,
  setProfilePic,
  setRole,
  setUdemyCredits,
} from "@/redux/slices/userSlice";
import { DecodedTokenProps, FormErrors } from "@/types/types";
import googleRedirectUrl from "@/api/users/googleRedirectUrl";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookie = Cookies.get("cookie")?.toString();
  const [formErrors, setFormErrors] = useState<FormErrors>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mutation = useMutation<any, Error, { email: string; password: string }>(
    {
      mutationFn: loginUser,
      onSuccess: () => {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const validateForm = () => {
    const errors = {};
    if (!email) console.error("E-mail is mandatory.");
    if (!password) console.error("Password is mandatory.");
    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    mutation.mutate({ email, password });
  };

  useEffect(() => {
    if (cookie) {
      const decoded = jwtDecode<DecodedTokenProps>(cookie);
      dispatch(setCookie(cookie));
      dispatch(setFullName(decoded.fullName));
      dispatch(setProfilePic(decoded.profilePic));
      dispatch(setEmailAddress(decoded.email));
      dispatch(setBio(decoded.bio));
      dispatch(setRole(decoded.role));
      dispatch(setCoursesBought(decoded.coursesBought));
      dispatch(setUdemyCredits(decoded.udemyCredits));
    }
  }, [cookie]);

  const googleMutation = useMutation({
    mutationFn: googleRedirectUrl,
    onSuccess: (redirectUrl) => {
      if (redirectUrl) {
        window.location.href = redirectUrl;
      } else {
        console.error("Redirect URL not found.");
      }
    },
    onError: (error) => {
      console.error("Error during Google Redirect:", error);
    },
  });

  const handleGoogle = () => {
    googleMutation.mutate();
  };

  return (
    <div className="flex h-screen w-screen">

      {/* Left Side (Image) */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src="/images/loginImg.png"
          alt="Login Illustration"
          className="w-[100%] h-auto max-w-[620px] max-h-[100%] object-contain p-12 mt-[8rem]"
        />

        {/* Right Side (Form) */}

        <div className="w-full max-w-md p-6 bg-white shadow-md rounded-lg ml-[4rem] mr-[6rem]">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
            Log in to continue your learning journey
          </h2>

          {/* Email Form */}
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={`w-full px-4 py-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 ${formErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>


            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium flex items-center justify-center space-x-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12h-9m6 0l-3-3m3 3l-3 3"
                />
              </svg>
              <span>Continue with email</span>
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-4 text-sm text-gray-500">Other log in options</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Social Login Options */}
          <div className="flex justify-center space-x-5">
            <button className="p-2 border border-[#6D28D2] rounded-sm hover:bg-gray-100">
              <FcGoogle className="w-7 h-7" />
            </button>
            <button className="p-2 border border-[#6D28D2] rounded-sm hover:bg-gray-100">
              <FaFacebook className="w-7 h-7 text-blue-600" />
            </button>
            <button className="p-2 border border-[#6D28D2] rounded-sm hover:bg-gray-100">
              <FaApple className="w-7 h-7 opacity-85" />
            </button>
          </div>

          {/* Additional Links */}
          <div className="mt-16 space-y-3 text-center text-base bold text-gray-900 bg-gray-100">
            <div className="border-b-2 py-3">
              Don’t have an account?{" "}
              <a href="/signup" className="text-purple-700 underline font-medium underline-offset-[5px]">
                Sign up
              </a>
            </div>
            <button className="text-purple-700 underline font-medium underline-offset-[5px] pb-5 pt-0">
              Log in with your organization
            </button>
          </div>
        </div>

      </div>

    </div>


  );
};

export default Login;
