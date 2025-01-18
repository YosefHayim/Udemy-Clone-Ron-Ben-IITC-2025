import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignupBtn = () => {
  return (
    <Link to="/signup">
      <Button className="font-bold transition duration-150 text-sm font-Sans py-[1.21rem] bg-[#6D28D2] hover:bg-[#892DE1] text-white rounded-[0.2rem] px-4 focus:outline-none">
        Sign up
      </Button>
    </Link>
  );
};

export default SignupBtn;
