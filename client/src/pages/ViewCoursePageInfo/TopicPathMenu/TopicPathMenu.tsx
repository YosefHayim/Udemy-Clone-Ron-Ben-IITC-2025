import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const TopicPathMenu: React.FC<{
  category: string;
  subcategory: string;
  topic: string;
}> = ({ category, subcategory, topic }) => {
  const navigate = useNavigate();

  const handleNavigate = (searchTerm: string) => {
    navigate(
      `/courses/search?src=ukw&q=${encodeURIComponent(
        searchTerm.toLowerCase()
      )}`
    );
  };

  return (
    <div className="flex flex-row items-center gap-[1em] text-[#c0c4fc] z-[1] mb-[1em]">
      <b
        className="cursor-pointer"
        onClick={() => handleNavigate(category)}
        id={category}
      >
        {category}
      </b>
      <MdOutlineKeyboardArrowRight className="text-white" />
      <b
        className="cursor-pointer"
        onClick={() => handleNavigate(subcategory)}
        id={subcategory}
      >
        {subcategory}
      </b>
      <MdOutlineKeyboardArrowRight className="text-white" />
      <b
        className="cursor-pointer"
        onClick={() => handleNavigate(topic)}
        id={topic}
      >
        {topic}
      </b>
    </div>
  );
};

export default TopicPathMenu;
