import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignupBtn = () => {
  return (
    <Link to="/signup">
      <Button className="text-white bg-black font-bold px-4 py-2 rounded hover:opacity-70 transition duration-150 text-sm font-Sans">
        Sign up
      </Button>
    </Link>
  );
};

export default SignupBtn;
