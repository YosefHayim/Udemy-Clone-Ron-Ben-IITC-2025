import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ButtonInsideHover = ({ to, insideBtnText }) => {
  return (
    <Button className="mt-2 w-full rounded-[0.2rem] bg-btnColor px-14 py-[1.2rem] font-sans text-sm font-bold text-white transition duration-150 hover:bg-[#892DE1] focus:outline-none">
      <Link to={to}>{insideBtnText}</Link>
    </Button>
  );
};

export default ButtonInsideHover;
