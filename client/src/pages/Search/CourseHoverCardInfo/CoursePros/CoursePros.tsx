import { IoMdCheckmark } from "react-icons/io";

const CoursePros = () => {
  return (
    <ul className="flex flex-col items-start justify-start gap-[0.5em]">
      <span className="font-bold">What you’ll learn</span>
      <li>
        <div className="flex items-start gap-[1em]">
          <IoMdCheckmark className="text-[1.5em]" />
          <p className="text-[0.8em]">
            Learn React from the ground up and finish the course as an advanced
            React developer
          </p>
        </div>
      </li>
      <li>
        <div className="flex items-start gap-[1em]">
          <IoMdCheckmark className="text-[1.5em]" />
          <p className="text-[0.8em]">
            Build multiple high-quality demo apps, including a fullstack app
            built with NextJS
          </p>
        </div>
      </li>
      <li>
        <div className="flex items-start gap-[1em]">
          <IoMdCheckmark className="text-[1.5em]" />
          <p className="text-[0.8em]">
            Join more than 900,000 students in this course & more than 3,000,000
            students I taught across all my courses
          </p>
        </div>
      </li>
    </ul>
  );
};

export default CoursePros;
