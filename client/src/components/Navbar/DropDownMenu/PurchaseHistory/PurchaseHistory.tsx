import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import PurchaseHistoryRow from "./PurchaseHistoryRow/PurchaseHistoryRow";

const PurchaseHistory = () => {
  const userCredits = useSelector(
    (state: RootState) => state?.user.udemyCredits,
  );

  useEffect(() => {}, [userCredits]);

  return (
    <div className="p-[5em]">
      <h1 className="mb-[1em] font-bold">Purchase history</h1>
      <div className="flex flex-row items-start justify-start gap-[1em]">
        <h3 className="mt-[1em] font-bold">Courses</h3>
        <h3 className="mt-[1em] font-bold">Subscriptions</h3>
        <h3 className="mt-[1em] font-bold">Refunds</h3>
      </div>
      <hr />
      <div>
        <div className="mt-[1.5em] flex flex-row items-center justify-center gap-[10em]">
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
