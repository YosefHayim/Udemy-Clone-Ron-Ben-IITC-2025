import { BiDislike, BiLike } from "react-icons/bi";

const HelpfulContainer = ({ idOfReview }) => {
  return (
    <div className="flex flex-row items-start justify-start gap-[1em]">
      <p>Helpful?</p>
      <BiLike className="cursor-pointer" id={idOfReview} />
      <BiDislike className="cursor-pointer" id={idOfReview} />
    </div>
  );
};

export default HelpfulContainer;
