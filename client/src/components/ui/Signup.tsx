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
            <input
              type="text"
              id="fullName"
              placeholder="Full name"
              className="w-full px-4 py-3 border placeholder:text-pholdergray text-black font-semibold border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Email */}
            <input
              type="email"
              id="email"
              placeholder="E-mail"
              className="w-full px-4 py-3 border placeholder:text-pholdergray text-black font-semibold border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Password */}
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 border placeholder:text-pholdergray text-black font-semibold border-black rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Checkbox */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="offers"
                className="w-4 h-4 border border-gray-400 rounded focus:ring-2 focus:ring-gray-600 bg-white text-gray-900 checked: checked:border-black"
              />
              <label htmlFor="offers" className="text-gray-800 text-sm">
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
              By signing up, you agree to our{' '}
              <a href="/terms" className="text-purple-600 hover:underline">
                Terms of Use
              </a>{' '}
              and{' '}
              <a href="/privacy" className="text-purple-600 hover:underline">
                Privacy Policy
              </a>.
            </p>
          </form>

          {/* Link to Login */}
          <div className="mt-6 text-center">
            <a href="/login" className="text-gray-800">
              Already have an account?{' '}
              <span className="text-purple-600 hover:underline">Log in</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
