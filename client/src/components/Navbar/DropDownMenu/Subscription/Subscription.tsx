import { Button } from "@/components/ui/button";
import { IoMdCheckmark } from "react-icons/io";
import subscriptionImg from "/images/subscription-img.png";

const Subscription = () => {
  return (
    <div className="p-[5em]">
      <h1 className="mb-[1em] font-sans font-extrabold">Subscriptions</h1>
      <div className="flex flex-col items-start justify-start gap-[1em]">
        <h2 className=" text-[1.5em]">Manage your Udemy subscriptions</h2>
        <h3 className="mb-[0.5em] font-sans text-[1.5em] font-extrabold">
          Active plans
        </h3>
      </div>
      <div className="mb-[2em] flex h-[10em] w-full flex-row items-center justify-center border-2 border-dashed border-gray-200 p-[2em]">
        <div>
          <p>You don’t have any active subscriptions</p>
        </div>
      </div>
      {/* Here we render the data of history purchases of courses etc */}
      <h3 className="mb-[0.5em] font-sans text-[1.5em] font-extrabold">
        Subscription plans available
      </h3>
      <div className="flex flex-row items-center justify-between border border-gray-200">
        <div className=" p-[2em]">
          <div className="flex flex-row items-center justify-between">
            <div>
              <h4 className="mb-[1.5em] font-sans font-extrabold">
                Personal Plan
              </h4>
              <ul className="mb-[1em] flex flex-col items-start justify-start gap-[0.5em]">
                <p>
                  New opportunities await. Sign up for Personal Plan to get all
                  this and more:
                </p>
                <li className="flex flex-row items-center justify-start gap-[0.5em]">
                  <IoMdCheckmark />
                  <p>Access to 12,000+ top courses</p>
                </li>
                <li className="flex flex-row items-center justify-start gap-[0.5em]">
                  <IoMdCheckmark />
                  <p>Courses in tech, business, and more</p>
                </li>
                <li className="flex flex-row items-center justify-start gap-[0.5em]">
                  <IoMdCheckmark />
                  <p>Practice tests, exercises, and Q&A</p>
                </li>
              </ul>
              <div className="flex flex-col items-start justify-start gap-[1em]">
                <div className="flex flex-row items-start justify-start gap-[1em]">
                  <Button className="h-[3em] rounded-[0.2em] bg-btnColor font-sans font-extrabold text-white hover:bg-[#892de1] focus:outline-none">
                    Subscribe
                  </Button>
                  <Button className="hover:hover-color-mix h-[3em] rounded-[0.2em] bg-white font-sans font-extrabold text-btnColor shadow-none hover:bg-white focus:outline-none">
                    Learn more
                  </Button>
                </div>
                <p>Starting at ₪66.67 per month. Cancel anytime.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img src={subscriptionImg} alt="" className="h-[25em]" />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
