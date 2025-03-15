import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import FrequentlyBoughtTogether from "@/pages/ViewCoursePageInfo/FrequentlyBoughtTogether/FrequentlyBoughtTogether";
import axios from "axios";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { useCallback, useEffect, useState } from "react";
import TopicSearch from "./TopicSearch/TopicSearch";
import ItemInCart from "@/components/Navbar/Cart/ItemInCart/ItemInCart";
import { IoClose } from "react-icons/io5";
import { ResponseSuggestions } from "@/types/types";

const DialogFrequentlyBoughtTogether: React.FC<{
  courseTopic: string;
  courseId: string;
  instructorId: string;
  showDialogOfFbt: boolean;
  setShowDialogOfFbt: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({
  courseTopic,
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
    const query = getShortenedCourseName(courseTopic);
    console.log(`first word chosen: `, query);

    if (query.length > 1) {
      try {
        const response = await axios.get(
          `https://api.datamuse.com/words?rel_trg=${encodeURIComponent(
            query
          )}&max=10`
        );
        setSuggestions(
          response.data.map((item: ResponseSuggestions) => {
            console.log(item.word);
          })
        );
      } catch (error) {
        console.log("Error fetching autocomplete suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  }, [courseTopic]);

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  if (!courseTopic) {
    console.log(`There is no course topic provided`);
    return;
  }

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
                  {suggestions.map((suggestion) => (
                    <TopicSearch key={suggestion} text={suggestion} />
                  ))}
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
