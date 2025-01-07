import studentBoughtImg from "/images/student-also-bought.png";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import HeartBtn from "@/pages/Search/CourseHoverCardInfo/InteractionBtns/HeartBtn/HeartBtn";
import { LuDot } from "react-icons/lu";

const StudentsAlsoBought = () => {
  return (
    <div>
      <h2>Students also bought</h2>
      <div className="flex flex-row items-start">
        <hr />
        <div>
          <img src={studentBoughtImg} alt="" />
        </div>
        <div>
          <b>Undergraduate course on semiconductor device physics-I</b>
          <div className="flex items-center gap-[0.5em]">
            <p>18 total hours</p>
            <LuDot />
            <p>Updated 10/2021</p>
          </div>
        </div>
        <div>
          <b>4.3</b>
          <MdOutlineStarPurple500 />
        </div>
        <div>
          <p>1,295</p>
          <IoPeople />
        </div>
        <div>
          <p>
            ₪<b>39.90</b>
          </p>
          <p className="underline">₪79.90</p>
        </div>
        <div>
          <HeartBtn />
        </div>
      </div>
      <div className="border border-black rounded-[0.2em] p-[1em]">
        <button>Show more</button>
      </div>
    </div>
  );
};

export default StudentsAlsoBought;
