import signup from "/images/signup.png";
import { Link, useNavigate } from "react-router-dom";
import registerUser from "@/api/users/registerUser";
import { useMutation } from "@tanstack/react-query";
import { RegisterUserPayload } from "@/types/types";
import { MdEmail } from "react-icons/md";
import { Checkbox } from "@radix-ui/react-checkbox";
import { emailContext } from "@/routes/AppRoutes";
import { useContext } from "react";

const SignUp: React.FC = () => {
  document.title = "Sign Up and Start Learning | Udemy";
  const navigate = useNavigate();

  const emailCtx = useContext(emailContext);
  if (!emailCtx) throw new Error("emailContext is not provided");
  const [emailUser, setEmailUser] = emailCtx;

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

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    setEmailUser(email);
    mutation.mutate({ fullName, email });
  };

  return (
    <div className="flex mt-[5em] mb-[30em]">
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <img
          src={signup}
          alt="Sign Up Illustration"
          className="h-[90%] w-auto object-contain"
        />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-sm">
          <h2 className="text-2xl font-bold text-[#303141] mb-6 w-full text-center">
            Sign up with email
          </h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="flex items-baseline w-[300px] gap-[0.5em]">
              <input
                type="checkbox"
                id="offers"
                required={true}
                className="border border-[#892de1] rounded focus:ring-2 focus:ring-gray-600 bg-white text-gray-900 checked:border-black"
              />
              <Checkbox id="offers" name="offers" />
              <label htmlFor="offers" className="text-gray-800 text-sm">
                Send me special offers, personalized recommendations, and
                learning tips.
              </label>
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              required={true}
              placeholder="Full name"
              className="w-full p-[1em] bg-white border border-[#9194ac] rounded-[0.3em] py-[1.5em] placeholder:font-bold placeholder:text-[#303141] focus:border-purple-800"
            />
            <input
              required={true}
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className="w-full p-[1em] bg-white border border-[#9194ac] rounded-[0.3em] py-[1.5em] placeholder:font-bold placeholder:text-[#303141] focus:border-purple-800"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-md bg-[#6d28d2] hover:bg-[#892de1] text-white font-medium flex items-center justify-center space-x-0"
            >
              <MdEmail className="w-5 h-5" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 12h-9m6 0l-3-3m3 3l-3 3"
              />

              <span className="text-[1rem] font-bold">Continue with email</span>
            </button>
            <p className="text-sm text-gray-500 mt-2 w-full">
              By signing up, you agree to our{" "}
              <Link to="/terms" className="text-purple-600 underline">
                Terms of Use{" "}
              </Link>
              and{" "}
              <Link to="/privacy" className="text-purple-600 underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
          <div className="bg-[#f6f7f9] mt-6 text-center w-full py-[1.5em] text-white font-medium flex items-center justify-center space-x-0">
            <Link to="/login" className="text-gray-800">
              Already have an account?{" "}
              <span className="text-purple-600 underline">Log in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
