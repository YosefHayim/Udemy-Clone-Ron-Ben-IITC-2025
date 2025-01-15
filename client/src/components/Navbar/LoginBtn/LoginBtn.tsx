import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LoginBtn = () => {
  return (
    <Link to="/login">
      <Button className="text-black text-sm px-4 py-2 font-bold hover:text-black bg-white hover:bg-gray-100 rounded border border-solid border-[#2d2f31] font-Sans">
        Login
      </Button>
    </Link>
  );
};

export default LoginBtn;
