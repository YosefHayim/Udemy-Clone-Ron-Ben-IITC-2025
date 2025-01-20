import { CourseTagProps } from "@/types/types";

const CourseTag: React.FC<CourseTagProps> = ({ tagName = "Bestseller" }) => {
  // Mapping tag names to specific styles
  const tagStyles: { [key: string]: string } = {
    Bestseller: "bg-[#C2E9EB] text-[#0D5261]",
    New: "bg-[#BBE7D3] text-[#123825]",
    "Highest Rated": "bg-[#FFE1B2] text-[#8B4309]",
    "Hot and New": "bg-[#FFD1CE] text-[#940A00]",
  };

  // Default style if the tagName does not match any key
  const style = tagStyles[tagName] || "bg-gray-100 text-gray-800";

  return (
    <span
      className={`${style} text-xs font-bold py-1 px-2 rounded-md inline-block`}
      style={{
        whiteSpace: "nowrap", // Prevents the span from expanding to fit the container
        width: "auto", // Ensures the width is only as wide as the content
      }}
    >
      {tagName}
    </span>
  );
};

export default CourseTag;
