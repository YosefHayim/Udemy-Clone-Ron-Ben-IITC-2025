import { Link } from "react-router-dom";

const ButtonInsideHover = ({ to, insideBtnText }) => {
  return (
    <Link
      to={to}
      className="mt-2 w-full rounded-[0.2rem] bg-btnColor p-2 font-sans text-sm font-bold text-white transition duration-150 hover:bg-[#892DE1] focus:outline-none"
    >
      <p className="w-full">{insideBtnText}</p>
    </Link>
  );
};

export default ButtonInsideHover;
