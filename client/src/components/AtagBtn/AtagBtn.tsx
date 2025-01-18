import { AtagBtnProps } from "@/types/types";

const AtagBtn: React.FC<AtagBtnProps> = ({ aTagName }) => {
  return (
    <a
      href="#"
      className="text-[#020202] font-normal text-sm font-Sans rounded-md hover:bg-purple-100 hover:text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300"
    >
      {aTagName}
    </a>
  );
};

export default AtagBtn;
