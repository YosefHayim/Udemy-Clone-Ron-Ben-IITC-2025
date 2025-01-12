import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query"; // Sintaxe atualizada
import Cookies from "js-cookie";
import loginUser from "@/api/users/loginUser";
import { jwtDecode } from "jwt-decode";
import {
  setFullName,
  setProfilePic,
  setRole,
  setUser,
} from "@/redux/slices/userSlice";

const Login = () => {
  const [email, setEmail] = useState(""); //email state
  const [password, setPassword] = useState(""); // password state
  const [formErrors, setFormErrors] = useState({}); // errors state
  const navigate = useNavigate(); // redirect to homepage
  const dispatch = useDispatch(); // global state redux

  // TanStack Query mutation for managing assync longinUser
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      console.log(data);
      navigate("/");
    },
    onError: (error) => {
      console.error(error);
      setFormErrors({
        general:
          error.response?.data?.message || "Something went wrong. Try again.",
      });
    },
  });

  const validateForm = () => {
    const errors = {};
    if (!email) errors.email = "E-mail is mandatory.";
    if (!password) errors.password = "Password is mandatory.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    mutation.mutate({ email, password });
  };

  const cookie = Cookies.get("cookie");
  if (cookie) {
    const decoded = jwtDecode(cookie);
    console.log(decoded);
    dispatch(setFullName(decoded.fullName));
    dispatch(setProfilePic(decoded.profilePic));
    dispatch(setRole(decoded.role));
  }

  return (
    <div className="flex h-screen">
      {/* Esquerda: Ilustração */}
      <img
        src="/images/login.png"
        alt="Login Illustration"
        className="h-[90%] w-auto object-contain flex items-center justify-center bg-transparent"
      />

      {/* Direita: Formulário */}
      <div className="w-1/2 h-full flex items-center justify-center bg-white">
        <div className="w-3/4 max-w-sm">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Log in to continue your learning journey
          </h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            {/* Campo de Email */}
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
                className={`w-full px-4 py-3 border rounded-md bg-blue-50 focus:outline-none ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}
            </div>

            {/* Campo de Senha */}
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
                className={`w-full px-4 py-3 border rounded-md bg-blue-50 focus:outline-none ${
                  formErrors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
              {formErrors.password && (
                <p className="text-red-500 text-sm">{formErrors.password}</p>
              )}
            </div>

            {/* Botão de Enviar */}
            <button
              type="submit"
              className={`w-full py-2 rounded-md ${
                mutation.isLoading
                  ? "bg-gray-400"
                  : "bg-purple-600 hover:bg-purple-700"
              } text-white transition`}
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? "Logging in..." : "Continue with email"}
            </button>

            {/* Mensagem de Erro Geral */}
            {formErrors.general && (
              <p className="text-red-500 text-sm mt-2">{formErrors.general}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
