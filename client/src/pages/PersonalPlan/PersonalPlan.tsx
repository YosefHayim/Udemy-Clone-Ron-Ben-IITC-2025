import { regFullButtonPurpleHover } from "@/utils/stylesStorage";
import personalPlanBannerPage from "/images/personal-plan-banner-page.png";
import artWomenRedImage from "/images/curly-women-red-image.jpg";
import bussinessPersonalPlan from "/images/busienss-personal-plan.jpg";
import { IoStar } from "react-icons/io5";
import TrustedBySection from "../Home/TrustedBySection/TrustedBySection";

const PersonalPlan = () => {
  return (
    <div className="text-base">
      <div className="flex w-full items-start justify-between">
        <div className="flex w-full flex-col items-start justify-start">
          <b className="mt-10 px-10 font-[lifeLtstd] text-2xl text-purple-600">Personal plan</b>
          <div className="flex flex-col items-start justify-start gap-5 px-10">
            <h1 className="w-[300px] font-[lifeLtstd] text-[2.4em] font-bold">
              Take your career to the next level
            </h1>
            <p className="text-lg">
              Go further at work and in life with subscription access to a collection of top-rated
              courses in tech, business, and more.
            </p>
            <button
              className={`${regFullButtonPurpleHover} rounded-sm px-10 font-sans text-base font-bold`}
            >
              Try it free for 7 days
            </button>
            <div>
              <p>Starting at $66.67 per month after trail.</p>
              <p>Cancel anytime.</p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <img src={personalPlanBannerPage} alt="" className="h-full" />
        </div>
      </div>
      <div className="my-5 flex w-full items-center justify-around text-center">
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <b className="text-5xl">11,000+</b>
          <p>on-demand courses</p>
        </div>
        <div className="my-5 flex w-full flex-col items-center justify-center gap-2">
          <b className="text-5xl">8,000+</b>
          <p>practice exercises</p>
        </div>
        <div className="my-5 flex w-full flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-center gap-2">
            <b className="text-5xl">4.4</b>
            <IoStar size={24} style={{ color: "#F69B09" }} />
          </div>
          <p>average course rating</p>
        </div>
        <div className="my-5 flex w-full flex-col items-center justify-center gap-2">
          <b className="text-5xl">4000+</b>
          <p>top instructors</p>
        </div>
      </div>
      <div className="mb-6">
        <TrustedBySection />
      </div>
      <div className="flex w-full items-center justify-start gap-5">
        <div>
          <img src={artWomenRedImage} alt="" className="h-full" />
        </div>
        <div className="flex w-[450px] flex-col items-start justify-start gap-5">
          <b>Current</b>
          <h2 className="font-[lifeLtstd] text-5xl font-bold">
            Cutting-edge skills to keep you sharp
          </h2>
          <p>
            Learn confidently with up-to-date courses covering in-demand topics like development,
            data science, IT certification, web design, digital marketing, leadership,
            communication, and more.
          </p>
        </div>
      </div>
      <div className="flex w-full flex-row-reverse items-center justify-between gap-5">
        <div>
          <img src={bussinessPersonalPlan} alt="" className="h-full" />
        </div>
        <div className="ml-20 flex w-[490px] flex-col items-start justify-start gap-5">
          <b>Flexible</b>
          <h2 className="font-[lifeLtstd] text-5xl font-bold">Freedom to explore and discover</h2>
          <p className="w-full">
            Test drive a new subject, switch between courses, or pick and
            <br>choose the lessons that best fit your needs. Personal Plan gives</br> you the power
            to control what and how you learn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalPlan;
