import { useNavigate } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import verifyCode from "@/api/users/verifyCode";
import { jwtDecode } from "jwt-decode";
import {
  setBio,
  setCookie,
  setCoursesBought,
  setEmailAddress,
  setFullName,
  setHeadline,
  setProfilePic,
  setRole,
  setUdemyCredits,
} from "@/redux/slices/userSlice";
import { DecodedTokenProps } from "@/types/types";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { emailContext } from "@/routes/AppRoutes";

const VerifyCode = () => {
  const [countdown, setCountdown] = useState(30);
  const [isSentCodeAgain, setIsSentCodeAgain] = useState(false);
  const [code, setCode] = useState("");
  const cookie = Cookies.get("cookie");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error("emailContext is not provided");
  const [emailUser, setEmailUser, userFullName, setUserFullName] = emailCtx;

  useEffect(() => {}, [emailUser, userFullName, code, cookie]);

  const verifyCodeMutation = useMutation({
    mutationFn: verifyCode,
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      console.error("Error during login process:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const code = formData.get("code") as string;
    setCode(code);
    verifyCodeMutation.mutate({ code, email: emailUser });
    if (!cookie) {
      console.error("No token found in cookies");
      return;
    }
    const decoded = jwtDecode<DecodedTokenProps>(cookie || "");
    dispatch(setCookie(cookie || ""));
    dispatch(setFullName(decoded.fullName));
    dispatch(setHeadline(decoded.headline));
    dispatch(setProfilePic(decoded.profilePic));
    dispatch(setEmailAddress(decoded.email));
    dispatch(setBio(decoded.bio));
    dispatch(setRole(decoded.role));
    dispatch(setCoursesBought(decoded.coursesBought));
    dispatch(setUdemyCredits(decoded.udemyCredits));
  };

  const handleResendCode = () => {
    setIsSentCodeAgain(true);
    setCountdown(30);

    // Start the countdown only when Resend Code is clicked
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 1) return prev - 1;
        clearInterval(interval);
        setIsSentCodeAgain(false); // Enable resend button when countdown ends
        return 30;
      });
    }, 1000);

    // Reactivate mutation to resend code
    verifyCodeMutation.mutate({
      email: emailUser,
      fullName: userFullName,
      code,
    });
  };

  const handleDifferentAccount = () => {
    console.log("Login to a different account clicked");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 30));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 flex items-start w-[100rem] min-width-[61.3125rem] px-[10rem] py-[6.8rem]">
      <img
        src="/images/Login_Password_Page.png"
        alt="Login Illustration"
        className="w-[100%] h-auto max-w-[620px] mt-[-2rem] max-h-[100%] object-contain p-12"
      />

      <div className="flex flex-col items-center justify-center w-full bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Check your inbox
        </h2>

        <p className="text-gray-600 text-center max-w-[25rem] mt-8 mb-7 text-[1rem]">
          Enter the 6-digit code we sent to{" "}
          <span className="font-bold">{emailUser || "your email"}</span>
          <span className="font-bold text-gray-800"></span> to finish your
          login.
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[27rem] flex flex-col items-center space-y-4"
        >
          <div className="relative w-full">
            <IoMdLock className="absolute left-3 w-4 h-4 top-1/2 transform -translate-y-1/2 text-[#303141]" />
            <input
              type="text"
              name="code"
              id="code"
              placeholder="6-digit code"
              className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-sm bg-white text-[#595C73] placeholder:text-[#595C73] ]
              placeholder:font-semibold placeholder:opacity-95 text-[1.1rem] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-sm bg-[#6D28D2] hover:bg-purple-700 text-white font-medium transition"
          >
            Log in
          </button>
        </form>

        {!isSentCodeAgain ? (
          <button
            onClick={handleResendCode}
            className="mt-5 text-[#6D28D2] font-bold underline text-[1rem] hover:text-purple-800"
          >
            Resend Code
          </button>
        ) : (
          <button
            disabled
            className="text-black cursor-not-allowed mt-5 text-[1rem]"
          >
            Didn't receive the code?{" "}
            <span className="font-bold">Resend code in {countdown} sec</span>
          </button>
        )}

        <div className="mt-14 w-full max-w-sm">
          <button
            onClick={handleDifferentAccount}
            className="w-full py-4 rounded-md font-bold text-[#6D28D2] underline text-sm bg-[#F6F7F9] hover:bg-gray-200"
          >
            Log in to a different account
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
