import Loader from "@/components/Loader/Loader";
import { regFullButtonPurpleHover } from "@/utils/stylesStorage";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";

const ContinueWEmail = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <button
      type="submit"
      className={`${regFullButtonPurpleHover} mb-6 flex w-full items-center justify-center font-sans font-extrabold`}
    >
      {isLoading ? (
        <Loader useSmallLoading={true} hSize="" />
      ) : (
        <button type="submit" className="flex items-center gap-2">
          <AiOutlineMail size={20} />
          Continue with email
        </button>
      )}
    </button>
  );
};

export default ContinueWEmail;
