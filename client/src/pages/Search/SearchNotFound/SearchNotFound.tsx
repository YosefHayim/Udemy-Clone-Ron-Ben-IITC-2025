import { useParams } from "react-router-dom";

const SearchNotFound = () => {
  const { searchTerm } = useParams();

  if (!searchTerm) return;
  return (
    <div className="flex flex-col w-full gap-[1em] px-6 py-[3em]">
      <h1 className="text-[1.5em] font-bold">
        Sorry, we couldn't find any results for "{searchTerm.replace(/:/g, "")}"
      </h1>
      <h2 className="font-bold">
        Try adjusting your search. Here are some ideas:
      </h2>
      <ul className="flex flex-col gap-[0.5em] text-[1.1em] list-disc">
        <li>Make sure all words are spelled correctly</li>
        <li>Try different search terms</li>
        <li>Try more general search terms</li>
      </ul>
    </div>
  );
};

export default SearchNotFound;
