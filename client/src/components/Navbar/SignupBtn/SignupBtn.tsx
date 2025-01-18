import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SignupBtn = () => {
  return (
    <Link to="/signup">
      <Button className="font-bold hover:opacity-70 transition duration-150 text-sm font-Sans bg-purple-700 text-white rounded-md px-4 py-2 hover:bg-purple-800 focus:outline-none">
        Sign up
      </Button>
    </Link>
  );
};

export default SignupBtn;
