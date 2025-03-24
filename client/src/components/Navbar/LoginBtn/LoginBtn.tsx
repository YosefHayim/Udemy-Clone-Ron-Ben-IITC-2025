import { Button } from "@/components/ui/button";
import { btnStyleNHover } from "@/utils/stylesStorage";
import { Link } from "react-router-dom";

const LoginBtn = () => {
  return (
    <Link to="/login">
      <Button
        className={`${btnStyleNHover} rounded-sm border border-purple-700 bg-white p-5 text-purple-800`}
      >
        Log in
      </Button>
    </Link>
  );
};

export default LoginBtn;
