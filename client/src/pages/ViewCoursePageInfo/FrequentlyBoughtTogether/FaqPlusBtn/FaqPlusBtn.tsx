import { LuPlus } from "react-icons/lu";

const FaqPlusBtn: React.FC = () => {
  return (
    <div>
      <div className="z-[10] rounded-[100em] border border-black bg-white p-[1em] text-center">
        <LuPlus className="font-sans text-[1.5em] font-extrabold" />
      </div>
    </div>
  );
};

export default FaqPlusBtn;
