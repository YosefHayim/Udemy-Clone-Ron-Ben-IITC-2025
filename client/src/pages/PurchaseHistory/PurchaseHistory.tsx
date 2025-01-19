import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RootState } from "@/redux";
import { useEffect } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";

const PurchaseHistory = () => {
  const userCredits = useSelector(
    (state: RootState) => state.user.udemyCredits
  );

  useEffect(() => {}, [userCredits]);

  return (
    <div className="p-[5em]">
      <h1 className="font-bold mb-[1em]">Purchase history</h1>
      <div className="flex flex-row items-start justify-start gap-[1em]">
        <h3 className="font-bold mt-[1em]">Courses</h3>
        <h3 className="font-bold mt-[1em]">Subscriptions</h3>
        <h3 className="font-bold mt-[1em]">Refunds</h3>
      </div>
      <hr />
      <div>
        <div className="flex flex-row items-center justify-center gap-[10em] mt-[1.5em]">
          <div className="flex flex-col items-start justify-normal">
            <h3 className="font-bold">Date</h3>
          </div>
          <div>
            <h3 className="font-bold">Total price</h3>
          </div>
          <div>
            <h3 className="font-bold">Payment type </h3>
          </div>
        </div>
        <hr className="mt-[1em]" />
        {/* Here we render the data of history purchases of courses etc */}
        <div className="flex flex-row items-center justify-between p-[1em] w-[1200px]">
          <div className="flex flex-row items-start justify-start gap-[0.5em] items-center">
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
            <p>₪149.90 Visa ****0912</p>
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
      </div>
    </div>
  );
};

export default PurchaseHistory;
