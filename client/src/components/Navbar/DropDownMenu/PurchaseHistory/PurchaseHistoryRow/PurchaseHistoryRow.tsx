import { Button } from "@/components/ui/button";
import { MdOutlineShoppingCart } from "react-icons/md";

const PurchaseHistoryRow = () => {
  return (
    <div className="flex flex-row items-center justify-between p-[1em] w-[1200px]">
      <div className="flex flex-row items-start justify-start gap-[0.5em]">
        <MdOutlineShoppingCart className="w-6 h-6" />
        <div className="flex flex-col items-start justify-start gap-[0.2em]">
          <p className="text-[#5022c3]">
            React Native - The Practical Guide [2025]
          </p>
          <b className="font-bold text-[#5022c3]">Request a refund</b>
        </div>
      </div>
      <div className="w-[50px]">
        <p>Dec 30, 2024</p>
      </div>
      <div>
        <p>₪149.90</p>
      </div>
      <div>
        <p>₪149.90 Visa ****9042</p>
      </div>
      <div>
        <div className="flex flex-row items-end justify-end gap-[1em]">
          <Button className="rounded-[0.2em] border border-black px-[0.8em] bg-white text-black hover:bg-gray-100">
            Receipt
          </Button>
          <Button className="rounded-[0.2em] border border-black px-[0.8em] bg-white text-black hover:bg-gray-100">
            Invoice
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseHistoryRow;
