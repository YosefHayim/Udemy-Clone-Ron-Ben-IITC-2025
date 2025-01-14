import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/index"; // Import RootState type for Redux
import DropdownMenu from "../../DropDownMenu"; // Importa o componente DropdownMenu

const Profile: React.FC = () => {
  // Acessa o estado do Redux para obter a imagem do perfil
  const userProfileImg = useSelector(
    (state: RootState) => state.user.profilePic
  );

  // Função para pegar a inicial do email, caso não haja imagem
  const getInitial = (email: string | undefined) => {
    if (!email) return "?"; // Retorna "?" se o email for inválido
    return email.charAt(0).toUpperCase(); // Primeira letra maiúscula
  };

  return (
    <div className="relative group">
      {/* Botão de Perfil */}
      <div
        className="flex items-center justify-center bg-black text-white font-bold rounded-full cursor-pointer"
        style={{
          width: "32px", // Largura do botão circular
          height: "32px", // Altura do botão circular
        }}
      >
        {/* Renderiza a imagem do perfil ou a inicial do email */}
        {userProfileImg ? (
          <img
            src={userProfileImg}
            alt="Profile"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <span>{getInitial("ben.klinski@gmail.com")}</span>
        )}
      </div>

      {/* Inclui o componente DropdownMenu */}
      <DropdownMenu />
    </div>
  );
};

export default Profile;
