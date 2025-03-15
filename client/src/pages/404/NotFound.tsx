import { Link } from "react-router-dom";
import notFoundImg from "/images/udemy-not-found.png";

const NotFound: React.FC = () => {
  document.title = "Online Courses - Learn Anything, On Your Schedule | Udemy";
  return (
    <div className="flex flex-col items-center justify-center gap-[1em] p-[2em]">
      <div>
        <img src={notFoundImg} alt="Not found image" className="h-[30em]" />
      </div>
      <div className="text-center ">
        <h1>We can’t find the page you’re</h1>
        <h1>looking for</h1>
      </div>
      <div>
        <p>
          Visit our
          <Link
            to="/"
            className="underline text-purpleStatic cursor-pointer mx-[0.5em]"
          >
            support page
          </Link>
          for further assistance.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
