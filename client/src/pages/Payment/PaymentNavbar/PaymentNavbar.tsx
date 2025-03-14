import Logo from "@/components/Logo/Logo";
import { Link } from "react-router-dom";

const PaymentNavbar: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <Link to="/" className="cursor-pointer">
        <Logo />
      </Link>
      <b className="text-btnColor hover:text-[#521e9f] cursor-pointer">
        <Link to="/cart">Cancel</Link>
      </b>
    </div>
  );
};

export default PaymentNavbar;
