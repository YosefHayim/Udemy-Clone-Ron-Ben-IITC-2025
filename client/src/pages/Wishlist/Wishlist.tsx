import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Wishlist: React.FC = () => {
  document.title = "My learning | Udemy";
  return (
    <div className="flex flex-col items-start justify-start p-[1em] bg-[#1d1e27] text-white">
      <div className="px-[15em]">
        <h1 className="mb-[1.5em] ">My learning</h1>
        <div className="flex flex-row items-start justify-start gap-[1em]">
          <b>All courses</b>
          <b>My Lists</b>
          <b>Wishlist</b>
          <b>Archived</b>
          <b>Learning tools</b>
        </div>
      </div>
      <div className="bg-white w-full h-[400px] text-center">
        <Button className="font-bold rounded-[0.2em] mt-[10em]">
          <Link to="/">Browse all courses</Link>
        </Button>
      </div>
    </div>
  );
};

export default Wishlist;
