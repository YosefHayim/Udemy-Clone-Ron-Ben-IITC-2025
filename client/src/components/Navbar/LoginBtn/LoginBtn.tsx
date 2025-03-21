import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LoginBtn = () => {
  return (
    <Link to="/login">
      <Button className="font-Sans rounded-[0.2rem] border-[0.01rem] border-solid border-purple-700 bg-white px-[1.2rem] py-[1.2rem] text-sm font-bold text-purple-700 hover:border-black hover:bg-purple-100 hover:text-black focus:outline-none">
        Log in
      </Button>
    </Link>
  );
};

export default LoginBtn;
