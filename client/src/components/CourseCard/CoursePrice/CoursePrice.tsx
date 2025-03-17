import Loader from "@/components/Loader/Loader";
import { CoursePriceProps } from "../../types/types";
import { useEffect, useState } from "react";

const CoursePrice: React.FC<CoursePriceProps> = ({
  discountPrice = 49.9,
  fullPrice = 369.9,
  chooseFlex = "flex-col",
  discountPriceSize = "",
  showFullPrice = true,
}) => {
  const [loading, setLoading] = useState(false);
  const isFree = discountPrice === 0 || fullPrice === 0;

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <div className={`${chooseFlex} gap-[0.5em]`}>
        <div>
          {loading ? (
            <div className="my-2">
              <Loader
                hSize=""
                paddingSetTo="0em"
                useSmallLoading={true}
                useSmallBlackLoading={true}
              />
            </div>
          ) : (
            <b className={`text-[${discountPriceSize}]`}>
              {isFree ? "Free" : `₪${discountPrice}`}
            </b>
          )}
        </div>
        {loading ? (
          <div className="my-2">
            <Loader
              hSize=""
              paddingSetTo="0em"
              useSmallLoading={true}
              useSmallBlackLoading={true}
            />
          </div>
        ) : (
          <div>
            {showFullPrice && !isFree && (
              <div>
                <p className="line-through text-gray-500">₪{fullPrice}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursePrice;
