import { useState } from "react";
import { MdLockOutline } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import loginUser from "@/api/users/loginUser";
import { IoMdLock } from "react-icons/io";

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
    <div className="flex-1 flex items-start w-[100rem] min-width-[61.3125rem] px-[10rem] py-[6.8rem]">
      
      <img
        src="/images/Login_Password_Page.png"
        alt="Login Illustration"
        className="w-[100%] h-auto max-w-[620px] mt-[-2rem] max-h-[100%] object-contain p-12"
      />
      
      <div className="flex flex-col items-center justify-center w-full bg-white">
        {/* Título */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
          Check your inbox
        </h2>

        {/* Subtítulo */}
        <p className="text-gray-600 text-center max-w-[25rem] mt-8 mb-7 text-[1rem]">
          Enter the 6-digit code we sent to<br/>
          <span className="font-bold text-gray-800"> baba@gmail.com </span> 
          to finish your login.
        </p>

        {/* Formulário */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[27rem] flex flex-col items-center space-y-4"
        >
          {/* Campo do código */}
          <div className="relative w-full">
          <IoMdLock className="absolute left-3 w-4 h-4 top-1/2 transform -translate-y-1/2 text-[#303141]" />
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="6-digit code"
              className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-sm bg-white text-[#595C73] placeholder:text-[#595C73] ]
              placeholder:font-semibold placeholder:opacity-95 text-[1.1rem] focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Botão de envio */}
          <button
            type="submit"
            className="w-full py-3 rounded-sm bg-[#6D28D2] hover:bg-purple-700 text-white font-medium transition"
          >
            Log in
          </button>
        </form>

        {/* Link para reenviar código */}
        <button
          onClick={handleResendCode}
          className="mt-4 text-[#6D28D2] font-bold underline text-sm hover:text-purple-800"
        >
          Resend code
        </button>

        {/* Link para outra conta */}
        <div className="mt-14 w-full max-w-sm">
          <button
            onClick={handleDifferentAccount}
            className="w-full py-4 rounded-md font-bold text-[#6D28D2] underline text-sm bg-[#F6F7F9] hover:bg-gray-200"
          >
            Log in to a different account
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;

