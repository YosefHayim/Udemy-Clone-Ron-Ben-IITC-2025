import { RootState } from "@/redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PurchaseHistoryRow from "./PurchaseHistoryRow/PurchaseHistoryRow";

const PurchaseHistory = () => {
  const userCredits = useSelector(
    (state: RootState) =>  state?.user?.udemyCredits
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
        <PurchaseHistoryRow />
        <PurchaseHistoryRow />
        <PurchaseHistoryRow />
        <PurchaseHistoryRow />
        <PurchaseHistoryRow />
      </div>
    </div>
  );
};

export default PurchaseHistory;
