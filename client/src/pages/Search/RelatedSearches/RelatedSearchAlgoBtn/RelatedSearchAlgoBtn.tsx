import { useNavigate } from "react-router-dom";

const RelatedSearchAlgoBtn = ({
  algoSearch = "the complete 20204 web development bootcamp",
}) => {
  const navigate = useNavigate();
  const handleNavigateSearchTerm = () => {
    navigate(`/courses/search?src=ukw&q=${encodeURIComponent(algoSearch)}`);
  };
  return (
    <div
      onClick={handleNavigateSearchTerm}
      className="cursor-pointer hover:bg-[#892de1] bg-btnColor min-w-min rounded-[100em] p-[0.5em] text-white"
    >
      <b>{algoSearch}</b>
    </div>
  );
};

export default RelatedSearchAlgoBtn;
