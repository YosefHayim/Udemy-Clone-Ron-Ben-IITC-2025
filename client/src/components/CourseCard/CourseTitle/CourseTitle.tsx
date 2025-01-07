const CourseTitle = ({ title }) => {
  return (
    <b className="">
      {title || "React - The Complete Guide 2024 (incl. Next.js, Redux)"}
    </b>
  );
};

export default CourseTitle;
