import { LuDot } from 'react-icons/lu';

const SectionDuration: React.FC<{ duration: number; totalLessons: number }> = ({
  duration,
  totalLessons,
}) => {
  // Calculate hours and minutes from total duration in minutes
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;

  // Build the formatted string for duration
  const formattedDuration = `${hours > 0 ? `${hours}hr ` : ''}${minutes}min`;

  // Dynamically handle singular and plural for lectures
  const lectureText = totalLessons === 1 ? 'lecture' : 'lectures';

  return (
    <div className="flex  items-center justify-center">
      <p>
        {totalLessons} {lectureText}
      </p>
      <LuDot />
      <p>{formattedDuration}</p>
    </div>
  );
};

export default SectionDuration;
