const CourseRecap = ({ recapInfo }: { recapInfo: string }) => {
  return (
    <p className=" w-[500px]">
      {recapInfo || (
        <>
          Dive in and learn <b>React</b>.js from scratch! Learn <b>React</b>,
          Hooks, Redux, <b>React</b> Router, Next.js, Best Practices, and way
          more!
        </>
      )}
    </p>
  );
};

export default CourseRecap;
