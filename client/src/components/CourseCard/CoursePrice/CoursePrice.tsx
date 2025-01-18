import { CoursePriceProps } from "@/types/types";

const CoursePrice: React.FC<CoursePriceProps> = ({
  discountPrice = 49.9,
  fullPrice = 369.9,
  chooseFlex = "flex-col",
  discountPriceSize = "",
  showFullPrice = true,
}) => {
  return (
    <div className={`${chooseFlex} gap-[0.5em]`}>
      <div>
        <b className={`text-[${discountPriceSize}]`}>{`₪` + discountPrice}</b>
      </div>
      <div className={showFullPrice ? "block" : "hidden"}>
        <p className="line-through text-gray-500 text-[0.9em]">
          {`₪` + fullPrice}
        </p>
      </div>
    </div>
  );
};

export default CoursePrice;
