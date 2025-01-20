import { CourseTagProps } from "@/types/types";

const CourseTag: React.FC<CourseTagProps> = ({ tagName = "Bestseller" }) => {
  // Mapping tag names to specific styles
  const tagStyles: { [key: string]: string } = {
    Bestseller: "bg-teal-100 text-teal-800",
    New: "bg-green-100 text-green-800",
    "Highest Rated": "bg-yellow-100 text-yellow-800",
    "Hot & New": "bg-[#FFD1CE] text-[#940A00]",
  };

  // Default style if the tagName does not match any key
  const style = tagStyles[tagName] || "bg-gray-100 text-gray-800";

  return (
    <b className={`${style} text-[0.7em] py-[0.2em] px-[0.3em] rounded-[0.5em]`}>
      {tagName}
    </b>
  );
};

export default CourseTag;
