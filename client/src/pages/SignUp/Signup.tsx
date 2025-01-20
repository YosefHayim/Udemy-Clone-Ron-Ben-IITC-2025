import signup from "/images/signup.png";
import { Link, useNavigate } from "react-router-dom";
import registerUser from "@/api/users/registerUser";
import { useMutation } from "@tanstack/react-query";
import { RegisterUserPayload } from "@/types/types";

const SignUp: React.FC = () => {
  document.title = "Sign Up and Start Learning | Udemy";
  const navigate = useNavigate();

  const mutation = useMutation<unknown, Error, RegisterUserPayload>({
    mutationFn: registerUser,
    onSuccess: (data) => {
      // console.log(data);
      navigate("/");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = formData.get("fullName") as string | undefined;
    const email = formData.get("email") as string | undefined;
    const password = formData.get("password") as string | undefined;

    mutation.mutate({ fullName, email, password });
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <img
          src={signup}
          alt="Sign Up Illustration"
          className="h-[90%] w-auto object-contain"
        />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Sign up and start learning
          </h2>

          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full name"
              className="w-full px-4 py-3 border placeholder:text-pholdergray text-black font-semibold border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 border placeholder:text-pholdergray text-black font-semibold border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 border placeholder:text-pholdergray text-black font-semibold border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="offers"
                className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-gray-600 bg-white text-gray-900 checked: checked:border-black"
              />
              <label htmlFor="offers" className="text-gray-800 text-sm">
                I want to receive special offers, personalized recommendations,
                and learning tips.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            >
              Sign Up
            </button>
            <p className="text-sm text-gray-500 mt-2">
              By signing up, you agree to our
              <Link to="/terms" className="text-purple-600 hover:underline">
                Terms of Use
              </Link>
              and
              <Link to="/privacy" className="text-purple-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </form>
          <div className="mt-6 text-center">
            <Link to="/login" className="text-gray-800">
              Already have an account?
              <span className="text-purple-600 hover:underline">Log in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
