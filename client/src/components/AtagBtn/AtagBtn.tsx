import { AtagBtnProps } from "@/types/types";

const AtagBtn: React.FC<AtagBtnProps> = ({ aTagName }) => {
  return (
    <a
      href="#"
      className="text-[#020202] font-normal text-sm hover:text-purple-800 font-Sans"
    >
      {aTagName}
    </a>
  );
};

export default AtagBtn;
