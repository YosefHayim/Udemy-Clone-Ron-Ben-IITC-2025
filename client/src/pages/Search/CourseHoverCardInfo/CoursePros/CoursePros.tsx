import { IoMdCheckmark } from "react-icons/io";

const CoursePros: React.FC<{
  whatYouWillLearn: string[];
}> = ({ whatYouWillLearn }) => {
  return (
    <ul className="flex flex-col items-start justify-start gap-[0.5em]">
      <span className="font-bold">What you’ll learn</span>

      {whatYouWillLearn.slice(0, 3).map((pro, index) => (
        <li key={index}>
          <div className="flex items-start gap-[1em]">
            <IoMdCheckmark className="text-[1.5em]" />
            <p>{pro}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CoursePros;
