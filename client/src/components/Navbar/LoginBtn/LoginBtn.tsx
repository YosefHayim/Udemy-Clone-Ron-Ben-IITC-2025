import { Button } from "@/components/ui/button";
import { btnStyleNHover } from "@/utils/stylesStorage";
import { Link } from "react-router-dom";

const LoginBtn = () => {
  return (
    <Link to="/login">
      <Button
        className={`${btnStyleNHover} bg-white border-purple-700 border rounded-sm text-purple-800 p-5`}
      >
        Log in
      </Button>
    </Link>
  );
};

export default LoginBtn;
