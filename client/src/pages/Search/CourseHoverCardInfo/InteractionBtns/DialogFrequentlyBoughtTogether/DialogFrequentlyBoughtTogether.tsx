import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import FrequentlyBoughtTogether from "@/pages/ViewCoursePageInfo/FrequentlyBoughtTogether/FrequentlyBoughtTogether";
import axios from "axios";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import TopicSearch from "./TopicSearch/TopicSearch";
import ItemInCart from "@/components/Navbar/Cart/ItemInCart/ItemInCart";
import { IoClose } from "react-icons/io5";

const DialogFrequentlyBoughtTogether: React.FC<{
  courseName: string;
  courseId: string;
  instructorId: string;
}> = ({
  courseName,
  courseId,
  instructorId,
  showDialogOfFbt,
  setShowDialogOfFbt,
}) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Extract first 1-2 words from courseName
  const getShortenedCourseName = (name: string): string => {
    const words = name.split(" ").slice(0, 2); // Take only the first two words
    console.log(words);
    return words.join(" ");
  };

  const fetchSuggestions = useCallback(async () => {
    const query = getShortenedCourseName(courseName);

    if (query.length > 1) {
      try {
        const response = await axios.get(
          `https://api.datamuse.com/words?rel_trg=${encodeURIComponent(
            query[0]
          )}&max=10`
        );
        console.log(response);

        setSuggestions(response.data.map((item: any) => item.word));
      } catch (error) {
        console.log("Error fetching autocomplete suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  }, [courseName]);

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  return (
    <div>
      <AlertDialog open={showDialogOfFbt} onOpenChange={setShowDialogOfFbt}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <div className="flex items-center justify-between w-full">
                <div>
                  <p className="font-semibold">Added to cart</p>
                </div>
                <div
                  onClick={() => setShowDialogOfFbt(false)}
                  className="cursor-pointer p-[0.5em] text-gray-500
              hover:bg-purpleHoverBtn rounded-[0.2em]"
                >
                  <IoClose size={20} />
                </div>
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex items-center justify-around w-full">
                <div>
                  <IoMdCheckmarkCircle size={30} className="text-green-700" />
                </div>
                <div>
                  <ItemInCart
                    courseId={courseId}
                    rowPrices={false}
                    showHR={false}
                    showFullPrice={false}
                    hide={false}
                  />
                </div>
                <Button className="font-bold w-min rounded-[0.3em] px-[1em] focus:outline-none bg-btnColor hover:bg-purpleStatic text-white">
                  Go to cart
                </Button>
              </div>
              <div>
                <FrequentlyBoughtTogether instructorId={instructorId} />
              </div>
              <div className="flex flex-col items-start w-full justify-start">
                <h2 className="font-bold my-3 text-black">Related topics</h2>
                <div className="flex flex-wrap items-center justify-start gap-[0.5em]">
                  <TopicSearch text={"Java script"} />
                  <TopicSearch text={"CSS"} />
                  <TopicSearch text={"Web"} />
                  <TopicSearch text={"Java"} />
                  <TopicSearch text={"Python"} />
                  <TopicSearch text={"Java script"} />
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DialogFrequentlyBoughtTogether;
