import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import illustration from "/images/login.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState(""); // Estado para o email
  const [password, setPassword] = useState(""); // Estado para a senha
  const [error, setError] = useState(""); // Estado para mensagens de erro
  const [loading, setLoading] = useState(false); // Estado para o carregamento
  const navigate = useNavigate(); // Para redirecionar após login bem-sucedido

  // Função para enviar os dados do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário
    setLoading(true); // Inicia o estado de carregamento
    setError(""); // Limpa mensagens de erro anteriores

    try {
      const response = await axios.post(
        "https://udemy-clone-ron-ben.onrender.com/api/user/auth/login",
        { email, password }
      );
      console.log("Login bem-sucedido:", response.data); // Mostra os dados no console
      navigate("/"); // Redireciona para a página inicial
    } catch (err) {
      // Exibe mensagem de erro
      setError(err.response?.data?.message || "Algo deu errado. Tente novamente.");
    } finally {
      setLoading(false); // Finaliza o estado de carregamento
    }
  };

  return (
    <div className="flex h-screen">
      {/* Esquerda: Ilustração */}
      <img
        src={illustration}
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
                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado do email
                placeholder="ben.kilinski@gmail.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
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
                onChange={(e) => setPassword(e.target.value)} // Atualiza o estado da senha
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Botão de Enviar */}
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
              disabled={loading} // Desativa enquanto está carregando
            >
              {loading ? "Logging in..." : "Continue with email"}
            </button>

            {/* Exibe mensagem de erro */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            {/* Opções de Login com Redes Sociais */}
            <div className="flex items-center justify-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-gray-500 text-sm">Other login options</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

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

          {/* Links de Cadastro */}
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
