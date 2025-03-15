import Logo from "@/components/Logo/Logo";
import { btnStyleNHover } from "@/utils/stylesStorage";
import { Link } from "react-router-dom";

const PaymentNavbar: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <Link to="/" className="cursor-pointer">
        <Logo CustomCssSize="w-[7em]" />
      </Link>
      <b className={`${btnStyleNHover}`}>
        <Link to="/cart">Cancel</Link>
      </b>
    </div>
  );
};

export default PaymentNavbar;
