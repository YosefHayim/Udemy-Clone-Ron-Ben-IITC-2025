import { IoIosInformationCircle } from "react-icons/io";
import RelatedSearchAlgoBtn from "./RelatedSearchAlgoBtn/RelatedSearchAlgoBtn";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const RelatedSearches = () => {
  const [searchParams] = useSearchParams();
  const urlSearchTerm: string = searchParams.get("q")?.toLowerCase() || "";

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = useCallback(async () => {
    if (urlSearchTerm.length > 1) {
      try {
        const response = await axios.get(
          `https://api.datamuse.com/sug?s=${urlSearchTerm}`
        );
        setSuggestions(response.data.map((item: any) => item.word));
      } catch (error) {
        console.error("Error fetching autocomplete suggestions:", error);
      }
    } else {
      setSuggestions([]);
    }
  }, [urlSearchTerm]);

  useEffect(() => {
    fetchSuggestions();
  }, [fetchSuggestions]);

  return (
    <div className="w-full flex flex-col items-center justify-start gap-[1em] mt-[2em]">
      <div className="w-full flex flex-row items-center justify-start gap-[0.5em]">
        <b className="font-bold text-[1.2em]">Related searches</b>
        <div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="bg-none border-none shadow-none hover:bg-none hover:shadow-none">
                  <IoIosInformationCircle className="text-[1.5em]" />
                </div>
              </TooltipTrigger>
              <TooltipContent className="bg-white text-black w-[250px] p-[1.5em] border border-gray-150 shadow-alertAlgoInfo">
                <b>About these results</b>
                <p>
                  Explore results for similar search terms from students like
                  you.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      <div></div>
      <div className="flex flex-row w-full flex-wrap gap-[0.8em]">
        {suggestions.map((suggestion) => (
          <RelatedSearchAlgoBtn key={suggestion} algoSearch={suggestion} />
        ))}
      </div>
    </div>
  );
};

export default RelatedSearches;
