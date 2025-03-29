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
import { Link } from "react-router-dom";

const DialogFrequentlyBoughtTogether: React.FC<{
  courseTopic: string;
  courseId: string;
  instructorId: string;
  showDialogOfFbt: boolean;
  setShowDialogOfFbt: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ courseTopic, courseId, instructorId, showDialogOfFbt, setShowDialogOfFbt }) => {
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Extract first 1-2 words from courseName
  const getShortenedCourseName = (name: string): string => {
    return name.split(" ")[0]; // Take only the first word before space
  };

  const fetchSuggestions = useCallback(async () => {
    const query = getShortenedCourseName(courseTopic);
    console.log(`first word chosen: `, query);

    if (query.length > 1) {
      try {
        const response = await axios.get(
          `https://api.datamuse.com/words?rel_trg=${encodeURIComponent(query)}&max=10`
        );
        if (response) {
          console.log(response);
        }

        setSuggestions(response.data.map((item: ResponseSuggestions) => item.word));
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
              <div className="flex w-full items-center justify-between ">
                <div>
                  <p className="font-sans font-extrabold">Added to cart</p>
                </div>
                <div
                  onClick={() => setShowDialogOfFbt(false)}
                  className="cursor-pointer rounded-[0.2em] p-[0.5em]
              text-gray-500 hover:bg-purpleHoverBtn"
                >
                  <IoClose size={20} />
                </div>
              </div>
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex w-full items-center justify-around">
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
                <Button className="w-min rounded-[0.3em] bg-btnColor px-[1em] font-sans font-extrabold text-white hover:bg-purpleStatic focus:outline-none">
                  <Link to="/cart">Go to cart</Link>
                </Button>
              </div>
              <div>
                <FrequentlyBoughtTogether instructorId={instructorId} />
              </div>
              <div className="flex w-full flex-col items-start justify-start">
                <h2 className="my-3 font-sans font-extrabold text-black">Related topics</h2>
                <div className="flex flex-wrap items-center justify-start gap-[0.5em]">
                  {suggestions.map((suggestion) => (
                    <Link
                      to={`/courses/search?src=ukw&q=${encodeURIComponent(
                        suggestion.toLowerCase()
                      )}`}
                    >
                      <TopicSearch key={suggestion} text={suggestion} />
                    </Link>
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
