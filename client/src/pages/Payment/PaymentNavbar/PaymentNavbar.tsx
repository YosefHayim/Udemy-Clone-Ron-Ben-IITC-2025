import Logo from "@/components/Logo/Logo";
import { btnStyleNHover } from "@/utils/stylesStorage";
import { Link } from "react-router-dom";

const PaymentNavbar: React.FC = () => {
  return (
    <div className="flex w-full  items-center justify-between">
      <Link to="/" className="cursor-pointer">
        <Logo CustomCssSize="w-[7em]" />
      </Link>
      <Link to="/cart" className={`${btnStyleNHover} font-bold`}>
        Cancel
      </Link>
    </div>
  );
};

export default PaymentNavbar;
