import notFoundImg from "/images/udemy-not-found.png";

const ErrorImg = () => {
  return (
    <div>
      <img src={notFoundImg} alt="Not found image" className="h-[30em]" />
    </div>
  );
};

export default ErrorImg;
