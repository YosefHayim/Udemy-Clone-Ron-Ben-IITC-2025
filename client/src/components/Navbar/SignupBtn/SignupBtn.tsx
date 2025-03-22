import { Button } from "@/components/ui/button";
import { loginWithEmailBtn } from "@/utils/stylesStorage";
import { Link } from "react-router-dom";

const SignupBtn = () => {
  return (
    <Link to="/signup">
      <Button
        className={`${loginWithEmailBtn} h-full rounded-sm py-0 font-extrabold`}
      >
        Sign up
      </Button>
    </Link>
  );
};

export default SignupBtn;
