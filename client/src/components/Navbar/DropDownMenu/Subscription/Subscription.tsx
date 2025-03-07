import { Button } from "@/components/ui/button";
import { IoMdCheckmark } from "react-icons/io";
import subscriptionImg from "/images/subscription-img.png";

const Subscription = () => {
  return (
    <div className="p-[5em]">
      <h1 className="font-bold mb-[1em]">Subscriptions</h1>
      <div className="flex flex-col items-start justify-start gap-[1em]">
        <h2 className=" text-[1.5em]">Manage your Udemy subscriptions</h2>
        <h3 className="font-bold text-[1.5em] mb-[0.5em]">Active plans</h3>
      </div>
      <div className="h-[10em] flex flex-row items-center justify-center p-[2em] border-dashed border-2 border-gray-200 w-full mb-[2em]">
        <div>
          <p>You don’t have any active subscriptions</p>
        </div>
      </div>
      {/* Here we render the data of history purchases of courses etc */}
      <h3 className="font-bold text-[1.5em] mb-[0.5em]">
        Subscription plans available
      </h3>
      <div className="flex flex-row items-center justify-between border border-gray-200">
        <div className=" p-[2em]">
          <div className="flex flex-row items-center justify-between">
            <div>
              <h4 className="mb-[1.5em] font-bold">Personal Plan</h4>
              <ul className="flex flex-col items-start justify-start gap-[0.5em] mb-[1em]">
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
                  <Button className="focus:outline-none text-white font-bold bg-btnColor rounded-[0.2em] hover:bg-[#892de1] h-[3em]">
                    Subscribe
                  </Button>
                  <Button className="focus:outline-none font-bold text-btnColor bg-white hover:bg-white shadow-none hover:hover-color-mix rounded-[0.2em] h-[3em]">
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
