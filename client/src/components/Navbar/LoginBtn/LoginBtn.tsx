import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LoginBtn = () => {
  return (
    <Link to="/login">
      <Button className="text-sm font-bold hover:text-black bg-white border-solid font-Sans border-2 border-purple-700 text-purple-700 rounded-md px-4 py-2 hover:bg-purple-100 focus:outline-none">
        Login
      </Button>
    </Link>
  );
};

export default LoginBtn;
