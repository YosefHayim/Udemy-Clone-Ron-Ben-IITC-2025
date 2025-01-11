import CourseInstructor from "@/components/CourseCard/CourseInstructor/CourseInstructor";
import CoursePrice from "@/components/CourseCard/CoursePrice/CoursePrice";
import CourseTitle from "@/components/CourseCard/CourseTitle/CourseTitle";
import courseCartImg from "/images/course-cart-img.png";

const ItemInCart = () => {
  return (
    <div className="flex flex-row items-start justify-start gap-[0.5em]">
      <div>
        <img src={courseCartImg} alt="" className="rounded-[0.5em]" />
      </div>
      <div className="flex flex-col">
        <CourseTitle />
        <CourseInstructor />
        <CoursePrice showFullPrice={false} />
      </div>
      <hr />
    </div>
  );
};

export default ItemInCart;
