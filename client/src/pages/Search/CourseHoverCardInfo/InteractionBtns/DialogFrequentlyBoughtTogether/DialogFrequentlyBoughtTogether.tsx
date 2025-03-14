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
import TopicSearch from "./topicSearch/topicSearch";

const DialogFrequentlyBoughtTogether: React.FC<{ courseName: string }> = ({
  courseName = "",
}) => {
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async () => {
    if (courseName.length > 1) {
      try {
        const response = await axios.get(
          `https://api.datamuse.com/words?rel_trg=${encodeURIComponent(
            courseName
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
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline">Added to cart</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Added to cart</AlertDialogTitle>
            <AlertDialogDescription>
              <div className="flex items-center justify-around w-full">
                <IoMdCheckmarkCircle size={30} className="text-green-700" />
                <button className="font-bold w-full rounded-[0.3em] py-[1.5em] focus:outline-none bg-btnColor hover:bg-purpleStatic text-white">
                  Go to cart
                </button>
              </div>
              <div>
                <FrequentlyBoughtTogether instructorId={""} />
              </div>
              <div>
                <h2>Related topics</h2>
                <div className="flex flex-wrap items-center justify-center w-full g-1">
                  {suggestions.map((suggestion: string) => (
                    <TopicSearch key={suggestion} text={suggestion} />
                  ))}
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DialogFrequentlyBoughtTogether;
