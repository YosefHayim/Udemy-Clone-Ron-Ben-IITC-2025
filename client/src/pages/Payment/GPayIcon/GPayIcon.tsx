import { FcGoogle } from "react-icons/fc";

const GPayIcon = ({ extraDesign = ''}) => {
  return (
    <div className={`${extraDesign} flex flex-row gap-[0.5em] items-center`}>
      <FcGoogle />
      Pay
    </div>
  );
};

export default GPayIcon;
