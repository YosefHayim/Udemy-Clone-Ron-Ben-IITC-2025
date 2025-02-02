import { IoIosInformationCircle } from "react-icons/io";
import RelatedSearchAlgoBtn from "./RelatedSearchAlgoBtn/RelatedSearchAlgoBtn";

const RelatedSearches = () => {
  return (
    <div className="w-full flex flex-col items-center justify-start gap-[1em] mt-[2em]">
      <div className="w-full flex flex-row items-center justify-start gap-[0.5em]">
        <b className="font-bold text-[1.2em]">Related searches</b>
        <IoIosInformationCircle className="text-[1.5em]" />
      </div>
      <div className="flex flex-row w-full flex-wrap gap-[0.8em]">
        <RelatedSearchAlgoBtn algoSearch="the complete 2024 web development bootcamp" />
        <RelatedSearchAlgoBtn algoSearch="web developer bootcamp" />
        <RelatedSearchAlgoBtn algoSearch="web development bootcamp" />
        <RelatedSearchAlgoBtn algoSearch="the complete 2023 web development bootcamp" />
        <RelatedSearchAlgoBtn algoSearch="web developer" />
        <RelatedSearchAlgoBtn algoSearch="web development" />
        <RelatedSearchAlgoBtn algoSearch="full stack web development" />
        <RelatedSearchAlgoBtn algoSearch="complete web development" />
      </div>
    </div>
  );
};

export default RelatedSearches;
