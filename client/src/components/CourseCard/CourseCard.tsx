import { CourseCardProps } from "@/types/types";
import React from "react";

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  image,
  description,
  fullPrice,
  discountPrice,
  tag,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-32 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-2">
          <span className="text-red-500 font-bold">${discountPrice}</span>
          <span className="text-gray-500 line-through ml-2">${fullPrice}</span>
        </div>
        {tag && (
          <span className="text-xs text-white bg-yellow-500 px-2 py-1 rounded mt-2 inline-block">
            {tag}
          </span>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
