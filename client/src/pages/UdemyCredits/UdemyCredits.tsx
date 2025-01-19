import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RootState } from "@/redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CoursePurchaseRow from "./CoursePurchaseRow/CoursePurchaseRow";

const UdemyCredits = () => {
  const userCredits = useSelector(
    (state: RootState) => state.user.udemyCredits
  );

  useEffect(() => {}, [userCredits]);

  return (
    <div className="p-[5em]">
      <h1 className="font-bold mb-[1em]">Udemy credits</h1>
      <h2 className="text-[1.4em]">
        <span className="font-bold mt-[1em]">Your credits:</span> ₪
        {userCredits || 0.0}
      </h2>
      <div>
        <div className="flex flex-row items-center justify-between w-full">
          <div>
            <h3 className="font-bold mt-[1em] text-[1.4em] mb-[0.5em]">
              Credit balance history
            </h3>
          </div>
          <div>
            <form className="flex flex-row items-center">
              <Input
                placeholder="Enter credit code"
                className="rounded-[0.1em] border border-black"
              ></Input>
              <Button className="font-bold rounded-[0.1em]">Redeem</Button>
            </form>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[10em]">
          <div className="flex flex-col items-start justify-normal">
            <h3 className="font-bold">Date</h3>
          </div>
          <div>
            <h3 className="font-bold">Amount</h3>
          </div>
          <div>
            <h3 className="font-bold">Reason</h3>
          </div>
        </div>
        <hr className="mt-[1em]" />
        {/* Here we render the data of history purchases of courses etc */}
        <CoursePurchaseRow />
        <CoursePurchaseRow />
      </div>
    </div>
  );
};

export default UdemyCredits;
