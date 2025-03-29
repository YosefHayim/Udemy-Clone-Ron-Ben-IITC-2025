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
        <AlertDialogContent style={{ borderRadius: "0em", maxWidth: "650px", maxHeight: "650px" }}>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <CloseButtonDialogFBTAndTitle setShowDialogOfFbt={setShowDialogOfFbt} />
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex w-full items-center justify-around">
                <div>
                  <IoMdCheckmarkCircle size={30} className="text-green-700" />
                </div>
                <div className="flex w-full flex-col items-start justify-start">
                  <ItemInCart
                    courseId={courseId}
                    rowPrices={false}
                    showHR={false}
                    showFullPrice={true}
                    hide={false}
                  />
                  <ProcCheckNGoToCart />
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
