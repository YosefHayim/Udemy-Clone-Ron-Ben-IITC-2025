import { FcGoogle } from 'react-icons/fc';

const GPayIcon: React.FC<{ extraDesign?: string }> = ({ extraDesign = '' }) => {
  return (
    <div className={`${extraDesign} flex  items-center gap-[0.5em]`}>
      <FcGoogle />
      Pay
    </div>
  );
};

export default GPayIcon;
