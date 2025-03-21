import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignupBtn = () => {
  return (
    <Link to="/signup">
      <Button className="font-Sans rounded-[0.2rem] bg-btnColor px-4 py-[1.2rem] text-sm font-bold text-white transition duration-150 hover:bg-[#892DE1] focus:outline-none">
        Sign up
      </Button>
    </Link>
  );
};

export default SignupBtn;
