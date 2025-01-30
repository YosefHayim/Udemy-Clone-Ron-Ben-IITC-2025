const LoginBusniness = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      {/* Logo */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-purple-700">
          <span className="text-black">udemy</span> <span>business</span>
        </h1>
      </div>

      {/* Form */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        {/* Input Label */}
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter your work email address
        </label>
        {/* Input Field */}
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
          defaultValue="ben.kilinski@gmail.com"
        />
        {/* Button */}
        <button
          className="w-full bg-purple-600 text-white font-medium py-3 rounded-lg mt-4 hover:bg-purple-700 transition"
        >
          Continue
        </button>
      </div>

      {/* Links */}
      <div className="text-center mt-6">
        <a
          href="#"
          className="text-sm text-purple-600 hover:text-purple-800 underline"
        >
          Need help with logging in or signing up?
        </a>
        <p className="text-sm text-gray-500 mt-2">
          <a href="#" className="hover:underline">
            Read our Privacy Statement
          </a>
        </p>
      </div>
    </div>
  )
}

export default LoginBusniness