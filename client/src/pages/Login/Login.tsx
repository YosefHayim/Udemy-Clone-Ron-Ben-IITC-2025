// import illustration from "/images/login.png";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
// import { FaApple } from "react-icons/fa";
// import { setUser } from "@/redux/slices/userSlice";

// const Login = () => {
//   // const [name, setName] = useState(''); // Estado local para o nome
//   // const [email, setEmail] = useState(''); // Estado local para o e-mail
//   // const dispatch = useDispatch(); // Permite usar a ação setUser

//   const handleLogin = () => {
//     // Atualiza o estado global com o nome e o e-mail
//     // dispatch(setUser({ name, email }));
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Illustration */}

//       <img
//         src={illustration}
//         alt="Login Illustration"
//         className="h-[90%] w-auto object-contain flex items-center justify-center bg-transparent"
//       />

//       {/* Right Form */}
//       <div className="w-1/2 h-full flex items-center justify-center bg-white">
//         <div className="w-3/4 max-w-sm">
//           <h2 className="text-3xl font-bold text-gray-800 mb-6">
//             Log in to continue your learning journey
//           </h2>
//           <form className="flex flex-col space-y-4">
//             <div className="relative mb-4">
//               <label
//                 htmlFor="email"
//                 className="absolute top-0 left-4 text-sm text-gray-600 transform -translate-y-1/2 bg-blue-50 px-1"
//               >
//                 E-mail
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="ben.kilinski@gmail.com"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
//             >
//               Continue with email
//             </button>
//             <div className="flex items-center justify-center my-4">
//               <div className="flex-grow border-t border-gray-300"></div>
//               <span className="px-3 text-gray-500 text-sm">
//                 Other login options
//               </span>
//               <div className="flex-grow border-t border-gray-300"></div>
//             </div>

//             <div className="flex justify-center space-x-4">
//               <button className="w-14 h-14 bg-white border border-gray-600 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
//                 <FcGoogle className="text-4xl" />
//               </button>
//               <button className="w-14 h-14 bg-white border border-gray-600 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
//                 <FaFacebook className="text-3xl text-blue-600" />
//               </button>
//               <button className="w-14 h-14 bg-white border border-gray-600 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
//                 <FaApple className="text-3xl text-black" />
//               </button>
//             </div>
//           </form>
//           <div className="mt-6 text-center">
//             <a href="/register" className="text-gray-800">
//               Don't have an account?{" "}
//               <span className="text-purple-600 hover:underline">Sign up</span>
//             </a>
//             <div className="border-t my-2"></div>
//             <a
//               href="/organization-login"
//               className="text-purple-600 hover:underline font-semibold"
//             >
//               Log in with your organization
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { QueryClient, QueryClientProvider, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import illustration from "/images/login.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

// Define types for the login request parameters
type LoginParams = {
  email: string;
  password: string;
};

// Axios POST request function
const loginRequest = async ({ email, password }: LoginParams): Promise<any> => {
  const response = await axios.post("https://udemy-clone-ron-ben.onrender.com/api/user/auth/login", {
    email,
    password,
  });
  console.log(response)
  return response.data;
};

// Initialize QueryClient
const queryClient = new QueryClient();

const Login = () => {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const navigate = useNavigate(); // Hook for navigation



  const mutation = useMutation({
    mutationFn: loginRequest,
    onSuccess: (data) => {
      console.log("Login successful:", data);
      navigate("/"); // Navigate to the dashboard upon success
    },
    onError: (error: any) => {
      console.error("Login error:", error.response?.data?.message || "An error occurred");
    },
  });



  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form behavior
    mutation.mutate({ email, password }); // Trigger mutation with email and password
  };

  return (
    <div className="flex h-screen">
      {/* Left Section with Illustration */}
      <img
        src={illustration}
        alt="Login Illustration"
        className="h-[90%] w-auto object-contain flex items-center justify-center bg-transparent"
      />

      {/* Right Section with Login Form */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Log in to continue your learning journey
          </h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="absolute top-0 left-4 text-sm text-gray-600 transform -translate-y-1/2 bg-blue-50 px-1"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ben.kilinski@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password Input */}
            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="absolute top-0 left-4 text-sm text-gray-600 transform -translate-y-1/2 bg-blue-50 px-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? "Logging in..." : "Continue with email"}
            </button>

            {/* Error Message */}
            {mutation.isError && (
              <p className="text-red-500 text-sm mt-2">
                {mutation.error.response?.data?.message || "Something went wrong"}
              </p>
            )}

            {/* Divider */}
            <div className="flex items-center justify-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">Other login options</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center space-x-4">
              <button className="w-14 h-14 bg-white border border-gray-600 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
                <FcGoogle className="text-4xl" />
              </button>
              <button className="w-14 h-14 bg-white border border-gray-600 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
                <FaFacebook className="text-3xl text-blue-600" />
              </button>
              <button className="w-14 h-14 bg-white border border-gray-600 rounded-md flex items-center justify-center hover:bg-gray-100 transition">
                <FaApple className="text-3xl text-black" />
              </button>
            </div>
          </form>

          {/* Sign Up and Organization Login Links */}
          <div className="mt-6 text-center">
            <a href="/register" className="text-gray-800">
              Don't have an account? <span className="text-purple-600 hover:underline">Sign up</span>
            </a>
            <div className="border-t my-2"></div>
            <a
              href="/organization-login"
              className="text-purple-600 hover:underline font-semibold"
            >
              Log in with your organization
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Login;


