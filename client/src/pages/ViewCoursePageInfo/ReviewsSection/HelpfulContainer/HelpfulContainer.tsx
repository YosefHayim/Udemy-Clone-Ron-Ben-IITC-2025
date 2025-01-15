import { useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";

const HelpfulContainer = ({ idOfReview }) => {
  const [isClickedLike, setClickedLike] = useState(false);
  const [isDisLike, setDisLike] = useState(false);

  const handleLike = () => {
    setClickedLike((prev) => !prev);
  };

  const handleDislike = () => {
    setDisLike((prev) => !prev);
  };

  return (
    <div className="flex flex-row items-start justify-start gap-[1em]">
      <p>Helpful?</p>
      <div onClick={handleLike} className="cursor-pointer">
        {isClickedLike ? <BiLike /> : <BiSolidLike />}
      </div>
      <div className="cursor-pointer" onClick={handleDislike}>
        {isDisLike ? <BiDislike /> : <BiSolidDislike />}
      </div>
    </div>
  );
};

export default HelpfulContainer;
