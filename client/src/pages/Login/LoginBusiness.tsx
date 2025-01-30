import React, { useState } from "react";

const LoginBusiness = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/path-to-your-background-image.jpg')", // Substitua pelo caminho da sua imagem de fundo
      }}
    >
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Logo */}
        <div className="mb-6 text-center">
          <img
            src="/path-to-your-logo.png" // Substitua pelo caminho do seu logo
            alt="Udemy Business Logo"
            className="h-10 mx-auto"
          />
        </div>

        {/* Título */}
        <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
          Log in to continue your learning journey
        </h2>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input do email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter your work email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            className="w-full py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
          >
            Continue
          </button>
        </form>

        {/* Links auxiliares */}
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
    </div>
  )
}

export default LoginBusiness