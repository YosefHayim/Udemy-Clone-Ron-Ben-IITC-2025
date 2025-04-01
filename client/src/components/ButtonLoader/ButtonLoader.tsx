import Loader from "../Loader/Loader";
import { AiOutlineMail } from "react-icons/ai";
import { regFullButtonPurpleHover } from "@/utils/stylesStorage";

const ButtonLoader: React.FC<{
  isLoading: boolean;
  stopLoad: boolean;
  text?: string;
  showIcon?: boolean;
}> = ({ isLoading, stopLoad, text = `Continue with email`, showIcon = true }) => {
  return (
    <div className={`${isLoading ? "pointer-events-none" : ""}`}>
      <button
        type="submit"
        className={`${regFullButtonPurpleHover} w-full ${isLoading && "cursor-not-allowed opacity-50"}`}
      >
        {isLoading && !stopLoad ? (
          <Loader useSmallLoading={true} hSize="" />
        ) : (
          <p className="flex w-full items-center justify-center gap-2 text-base font-bold">
            {showIcon && <AiOutlineMail size={20} />}
            {text}
          </p>
        )}
      </button>
    </div>
  );
};

export default ButtonLoader;
