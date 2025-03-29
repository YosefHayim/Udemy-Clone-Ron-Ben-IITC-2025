import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import FrequentlyBoughtTogether from "@/pages/ViewCoursePageInfo/FrequentlyBoughtTogether/FrequentlyBoughtTogether";
import { IoMdCheckmarkCircle } from "react-icons/io";
import ItemInCart from "@/components/Navbar/Cart/ItemInCart/ItemInCart";
import CloseButtonDialogFBTAndTitle from "./CloseButtonDialogFBTAndTitle/CloseButtonDialogFBTAndTitle";
import ProcCheckNGoToCart from "../ProcCheckNGoToCart/ProcCheckNGoToCart";

const DialogFrequentlyBoughtTogether: React.FC<{
  courseTopic: string;
  courseId: string;
  instructorId: string;
  showDialogOfFbt: boolean;
  setShowDialogOfFbt: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ courseTopic, courseId, instructorId, showDialogOfFbt, setShowDialogOfFbt }) => {
  if (!courseTopic) {
    console.log(`There is no course topic provided`);
    return;
  }

  return (
    <div>
      <AlertDialog open={showDialogOfFbt} onOpenChange={setShowDialogOfFbt}>
        <AlertDialogContent
          style={{
            borderRadius: "0em",
            maxWidth: "750px",
            background: "#F6F7F9",
          }}
        >
          <AlertDialogHeader>
            <AlertDialogTitle>
              <CloseButtonDialogFBTAndTitle setShowDialogOfFbt={setShowDialogOfFbt} />
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex w-full items-center justify-around">
                <div className="flex w-full flex-col items-start justify-start">
                  <ItemInCart
                    widthChosen={`w-[19em]`}
                    courseId={courseId}
                    rowPrices={false}
                    showHR={false}
                    showFullPrice={true}
                    hide={false}
                  />
                  <div className="mt-3 flex w-full flex-col gap-2">
                    <ProcCheckNGoToCart />
                  </div>
                  <hr className="mb-6 mt-3 w-full" />
                </div>
              </div>
              <div className="flex flex-wrap text-black">
                <FrequentlyBoughtTogether
                  instructorId={instructorId}
                  showPlusButtons={false}
                  amountOfCourses={2}
                />
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DialogFrequentlyBoughtTogether;
