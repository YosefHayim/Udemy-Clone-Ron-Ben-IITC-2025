import { IoMdCheckmark } from "react-icons/io";

const UdemyGetYourDemoSection = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-[1em] p-[2em]">
      <h1>Get your demo</h1>
      <h2>
        Tell us your needs and we’ll start on a custom plan to drive results.
      </h2>
      <div className="flex flex-col items-start justify-start gap-[1em]">
        <ul className="flex w-[300px] flex-col items-start justify-start gap-[1em]">
          <h3 className="font-sans text-[1.1em] font-extrabold">
            With Udemy as your learning partner, you can:
          </h3>
          <li className="flex flex-row items-center justify-start gap-[0.5em]">
            <IoMdCheckmark className="text-[#199fa3]" />
            <p>
              Train your entire workforce with over 28,000+ courses in 16
              languages
            </p>
          </li>
          <li className="flex flex-row items-center justify-start gap-[0.5em]">
            <IoMdCheckmark className="text-[#199fa3]" />
            <p>
              Prep employees for over 200 industry-recognized certification
              exams
            </p>
          </li>
          <li className="flex flex-row items-center justify-start gap-[0.5em]">
            <IoMdCheckmark className="text-[#199fa3]" />
            <p>
              Develop highly skilled tech teams in risk-free practice
              environments
            </p>
          </li>
          <li className="flex flex-row items-center justify-start gap-[0.5em]">
            <IoMdCheckmark className="text-[#199fa3]" />
            <p>
              Identify emerging skills gaps, learning trends, and industry
              benchmarks
            </p>
          </li>
          <li className="flex flex-row items-center justify-start gap-[0.5em]">
            <IoMdCheckmark className="text-[#199fa3]" />
            <p>
              Integrate content with your existing learning management system
            </p>
          </li>
        </ul>
      </div>
      <h2 className="font-sans text-[1.1em] font-extrabold">Trusted by</h2>
      <div></div>
    </div>
  );
};

export default UdemyGetYourDemoSection;
