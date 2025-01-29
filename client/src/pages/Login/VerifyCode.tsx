import { useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import loginUser from "@/api/users/loginUser";

const VerifyCode = ({ email }) => {
  const [code, setCode] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Code submitted:", code);
    // Adicione a lógica de validação do código aqui
  };

  const mutation = useMutation<any, Error, { email: string; password: string }>(
    {
      mutationFn: loginUser,
      onSuccess: () => {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      },
      onError: (error) => {
        console.error(error);
      },
    }
  );

  const handleResendCode = () => {
    console.log("Resend code clicked");
    // Adicione a lógica para reenviar o código aqui
  };

  const handleDifferentAccount = () => {
    console.log("Login to a different account clicked");
    // Adicione a lógica para redirecionar para login de outra conta
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      {/* Título */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Check your inbox
      </h2>

      {/* Subtítulo */}
      <p className="text-gray-600 text-center mb-6">
        Enter the 6-digit code we sent to <br />
        <span className="font-bold text-gray-800">{email}</span> to finish your login.
      </p>

      {/* Formulário */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col items-center space-y-4"
      >
        {/* Campo do código */}
        <div className="relative w-full">
          <MdLockOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="6-digit code"
            className="w-full pl-10 pr-4 py-3 border rounded-md bg-white text-gray-800 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Botão de envio */}
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-purple-600 hover:bg-purple-700 text-white font-medium transition"
        >
          Log in
        </button>
      </form>

      {/* Link para reenviar código */}
      <button
        onClick={handleResendCode}
        className="mt-4 text-purple-700 underline text-sm hover:text-purple-800"
      >
        Resend code
      </button>

      {/* Link para outra conta */}
      <div className="mt-6 w-full max-w-sm">
        <button
          onClick={handleDifferentAccount}
          className="w-full py-3 rounded-md text-purple-700 underline text-sm bg-gray-100 hover:bg-gray-200"
        >
          Log in to a different account
        </button>
      </div>
    </div>
  );
};

export default VerifyCode;

