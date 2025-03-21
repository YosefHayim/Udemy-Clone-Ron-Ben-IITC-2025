import { GrCheckmark } from "react-icons/gr";

const CoursePros: React.FC<{
  whatYouWillLearn: string[];
  displayWhatYouLearn: boolean;
}> = ({ whatYouWillLearn, displayWhatYouLearn }) => {
  return (
    <ul className="flex w-full flex-col items-center justify-start">
      {displayWhatYouLearn && (
        <div>
          <span className="font-bold">What you’ll learn</span>
        </div>
      )}
      <div className="mt-1">
        {whatYouWillLearn.slice(0, 3).map((pro, index) => (
          <li key={index}>
            <div className="my-2 flex w-full items-start justify-start gap-2">
              <GrCheckmark size={12} className="mt-1 min-w-[12px]" />
              <p>{pro}</p>
            </div>
          </li>
        ))}
      </div>
    </ul>
  );
};

export default CoursePros;
