import signup from '../../assets/images/signup.png';

const SignUp = () => {
  return (
    <div className="flex h-screen">
      {/* Left Illustration */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <img
          src={signup}
          alt="Sign Up Illustration"
          className="h-[90%] w-auto object-contain"
        />
      </div>

      {/* Right Form */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Sign up and start learning
          </h2>
          <form className="flex flex-col space-y-4">
            {/* Full Name */}
            <div className="relative mb-4">
              <label
                htmlFor="fullName"
                className="absolute top-0 left-4 text-sm text-gray-600 transform -translate-y-1/2 bg-white px-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder=""
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="absolute top-0 left-4 text-sm text-gray-600 transform -translate-y-1/2 bg-white px-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder=""
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password */}
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="absolute top-0 left-4 text-sm text-gray-600 transform -translate-y-1/2 bg-white px-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder=""
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="offers"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="offers" className="text-gray-600 text-sm">
                I want to receive special offers, personalized recommendations, and learning tips.
              </label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            >
              Sign Up
            </button>

            {/* Privacy Policy */}
            <p className="text-sm text-gray-500 mt-2">
              By signing up, you agree to our{" "}
              <a href="/terms" className="text-purple-600 hover:underline">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-purple-600 hover:underline">
                Privacy Policy
              </a>.
            </p>
          </form>

          {/* Link to Login */}
          <div className="mt-6 text-center">
            <a href="/login" className="text-gray-800">
              Already have an account?{" "}
              <span className="text-purple-600 hover:underline">Log in</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
