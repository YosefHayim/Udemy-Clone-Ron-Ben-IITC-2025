import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/index"; // Import RootState type for Redux
import DropdownMenu from "../../DropDownMenu"; // Importa o componente DropdownMenu
import ProfilePic from "@/components/ProfilePic/ProfilePic";
import LoginBtn from "../LoginBtn/LoginBtn";
import SignupBtn from "../SignupBtn/SignupBtn";

const Profile: React.FC = () => {
  // Acessa o estado do Redux para obter a imagem do perfil
  const userProfileImg = useSelector(
    (state: RootState) => state.user.profilePic
  );

  const fullName = useSelector((state) => state.user.fullName);
  const profilePic = useSelector((state) => state.user.profilePic);

  if (!fullName && !profilePic) {
    return (
      <div className="flex flex-row gap-[1em]">
        <LoginBtn />
        <SignupBtn />
      </div>
    );
  }

  const [firstWord, secondWord] = fullName.split(" ");

  const shortcutName =
    (firstWord?.[0].toUpperCase() || "") +
    (secondWord?.[0].toUpperCase() || "");

  if (!fullName && !profilePic) {
    return;
  }

  // Função para pegar a inicial do email, caso não haja imagem
  const getInitial = (email: string | undefined) => {
    if (!email) return "?"; // Retorna "?" se o email for inválido
    return email.charAt(0).toUpperCase(); // Primeira letra maiúscula
  };

  return (
    <div className="relative group">
      <ProfilePic shortcutName={shortcutName} profilePic={profilePic} />
      <DropdownMenu />
    </div>
  );
};

export default Profile;
