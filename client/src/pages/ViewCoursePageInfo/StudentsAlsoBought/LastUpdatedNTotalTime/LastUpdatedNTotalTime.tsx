import { LuDot } from 'react-icons/lu';

const LastUpdatedNTotalTime: React.FC = () => {
  return (
    <div className="flex items-center gap-[0.2em]">
      <p className="font-sans font-extrabold text-[#1e6055]">18 total hours</p>
      <LuDot />
      <p>Updated 10/2021</p>
    </div>
  );
};

export default LastUpdatedNTotalTime;
