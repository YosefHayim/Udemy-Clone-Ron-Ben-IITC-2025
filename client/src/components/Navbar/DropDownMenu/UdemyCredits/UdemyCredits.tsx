import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CoursePurchaseRow from "./CoursePurchaseRow/CoursePurchaseRow";

const UdemyCredits = () => {
  const userCredits = useSelector((state: RootState) => state?.user.udemyCredits);

  useEffect(() => {}, [userCredits]);

  return (
    <div className="p-[5em]">
      <h1 className="mb-[1em] font-sans font-extrabold">Udemy credits</h1>
      <h2 className="text-[1.4em]">
        <span className="mt-[1em] font-sans font-extrabold">Your credits:</span> ₪
        {userCredits || 0.0}
      </h2>
      <div>
        <div className="flex w-full flex-row items-center justify-between">
          <div>
            <h3 className="mb-[0.5em] mt-[1em] font-sans text-[1.4em] font-extrabold">
              Credit balance history
            </h3>
          </div>
          <div>
            <form className="flex flex-row items-center">
              <Input
                placeholder="Enter credit code"
                className="rounded-[0.1em] border border-black"
              ></Input>
              <Button className="rounded-[0.1em] font-sans font-extrabold focus:outline-none">
                Redeem
              </Button>
            </form>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[10em]">
          <div className="flex flex-col items-start justify-normal">
            <h3 className="font-sans font-extrabold">Date</h3>
          </div>
          <div>
            <h3 className="font-sans font-extrabold">Amount</h3>
          </div>
          <div>
            <h3 className="font-sans font-extrabold">Reason</h3>
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
