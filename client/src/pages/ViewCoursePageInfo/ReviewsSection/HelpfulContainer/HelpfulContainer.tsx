import { BiDislike, BiLike } from "react-icons/bi";

const HelpfulContainer = () => {
  return (
    <div className="flex flex-row items-start justify-start gap-[1em]">
      <p>Helpful?</p>
      <BiLike className="cursor-pointer" />
      <BiDislike className="cursor-pointer" />
    </div>
  );
};

export default HelpfulContainer;
