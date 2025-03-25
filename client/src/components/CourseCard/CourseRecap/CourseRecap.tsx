const CourseRecap = ({ recapInfo }: { recapInfo: string }) => {
  return (
    <div className="flex w-full flex-wrap">
      <p>
        {recapInfo || (
          <>
            Dive in and learn <b>React</b>.js from scratch! Learn <b>React</b>, Hooks, Redux,{' '}
            <b>React</b> Router, Next.js, Best Practices, and way more!
          </>
        )}
      </p>
    </div>
  );
};

export default CourseRecap;
