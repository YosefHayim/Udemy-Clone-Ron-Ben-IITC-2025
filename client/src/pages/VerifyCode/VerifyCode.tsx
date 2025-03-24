import { Link, useNavigate } from "react-router-dom";
import { IoMdLock } from "react-icons/io";
import { useMutation } from "@tanstack/react-query";
import verifyCode from "@/api/users/verifyCode";
import { useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
import { emailContext } from "@/routes/AppRoutes";
import Loader from "@/components/Loader/Loader";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Cookies from "js-cookie";
import { setUserInformation } from "@/utils/setUserInformation";

const VerifyCode = () => {
  const [countdown, setCountdown] = useState(30);
  const [isSentCodeAgain, setIsSentCodeAgain] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const [code, setCode] = useState("");
  const cookie = useSelector((state: RootState) => state.user.cookie);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error("emailContext is not provided");
  const [emailUser, setEmailUser, userFullName, setUserFullName] = emailCtx;

  useEffect(() => {}, [emailUser, userFullName, code, cookie]);

  const verifyCodeMutation = useMutation({
    mutationFn: verifyCode,
    onSuccess: (cookie) => {
      setUserInformation(cookie, dispatch);
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
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setCode(code);
    verifyCodeMutation.mutate({ code, email: emailUser });
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
    <div className="min-width-[61.3125rem] flex w-full flex-1 items-start justify-center px-[10rem] py-[6.8rem]">
      <div>
        <img src="/images/Login_Password_Page.png" alt="Login Illustration" />
      </div>
      <div className="flex w-full flex-col items-center justify-center bg-white">
        <h2 className="mb-2 text-center font-sans text-3xl font-extrabold text-gray-800">
          Check your inbox
        </h2>
        <p className="mb-7 mt-8 max-w-[25rem] text-center text-[1rem] text-gray-600">
          Enter the 6-digit code we sent to{" "}
          <span className="font-sans font-extrabold">
            {emailUser || "your email"}
          </span>
          <span className="font-sans font-extrabold text-gray-800"></span> to
          finish your login.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-[27rem] flex-col items-center space-y-4"
        >
          <div className="relative w-full">
            <IoMdLock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-courseNameColorTxt" />
            <input
              required={true}
              maxLength={6}
              type="text"
              name="code"
              id="code"
              placeholder="6-digit code"
              className="]placeholder:opacity-95 w-full rounded-sm border border-gray-600 bg-white py-3 pl-10 pr-4 text-[1.1rem] text-grayNavbarTxt placeholder:text-grayNavbarTxt hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="flex h-[50px] w-full items-center justify-center space-x-0 rounded-md bg-btnColor py-3 font-medium text-white hover:bg-[#892de1]"
          >
            {isLoading ? (
              <Loader useSmallLoading={true} hSize="" />
            ) : (
              <div className="flex ">
                <button className="font-sans text-[1rem] font-extrabold focus:outline-none">
                  Log in
                </button>
              </div>
            )}
          </button>
        </form>

        {!isSentCodeAgain ? (
          <button
            onClick={handleResendCode}
            className="mt-5 font-sans text-[1rem] font-extrabold text-btnColor underline hover:text-purple-800 focus:outline-none"
          >
            Resend Code
          </button>
        ) : (
          <button
            disabled
            className="mt-5 cursor-not-allowed text-[1rem] text-black"
          >
            Didn't receive the code?{" "}
            <span className="font-sans font-extrabold">
              Resend code in {countdown} sec
            </span>
          </button>
        )}

        <div className="mt-14 w-full max-w-sm">
          <Link to="/login">
            <button
              onClick={handleDifferentAccount}
              className="w-full rounded-md bg-[#F6F7F9] py-4 font-sans text-sm font-extrabold text-btnColor underline hover:bg-gray-200 focus:outline-none"
            >
              Log in to a different account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
