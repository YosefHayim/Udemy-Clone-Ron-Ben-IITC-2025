import React from "react";

const FooterLogin: React.FC = () => {
  return (
    <div className="flex items-center justify-between bg-black text-white p-6 border-t border-gray-700">
      {/* Texto Explicativo */}
      <div>
        <h3 className="text-lg font-bold">Teach the world online</h3>
        <p className="text-sm text-gray-400">
          Create an online video course, reach students across the globe, and earn money
        </p>
      </div>

      {/* Botão */}
      <div>
        <button className="px-4 py-2 text-sm font-bold text-white border border-white rounded hover:bg-gray-700">
          Teach on Udemy
        </button>
      </div>
    </div>
  );
};

export default FooterLogin;
