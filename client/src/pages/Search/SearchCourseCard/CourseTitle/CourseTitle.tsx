const CourseTitle = ({ title }) => {
  return (
    <b className="text-[0.8em]">
      {title || "React - The Complete Guide 2024 (incl. Next.js, Redux)"}
    </b>
  );
};

export default CourseTitle;
