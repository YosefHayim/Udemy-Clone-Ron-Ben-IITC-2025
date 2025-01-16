import { Button } from "@/components/ui/button";
import GPayIcon from "../GPayIcon/GPayIcon";

const GooglePay: React.FC = () => {
  return (
    <div className="w-full px-[1em]">
      <Button className="w-full rounded-[0.3em]">
        <GPayIcon />
      </Button>
    </div>
  );
};

export default GooglePay;
