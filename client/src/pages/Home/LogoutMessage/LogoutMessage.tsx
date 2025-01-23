import { IoMdCheckmarkCircle } from "react-icons/io";

const LogoutMessage = () => {
  return (
    <div className="border border-black p-[1.2em] rounded-[1em] flex flex-row items-center justify-start gap-[0.4em] my-[2em]">
      <IoMdCheckmarkCircle className="text-[2.5em] text-[#206241]" />
      <b className="text-[1.2em]">
        You’ve successfully logged out of Udemy. Come back soon!
      </b>
    </div>
  );
};

export default LogoutMessage;
