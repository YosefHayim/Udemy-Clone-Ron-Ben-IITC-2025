import Loader from "@/components/Loader/Loader";
import ItemInCart from "@/components/Navbar/Cart/ItemInCart/ItemInCart";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiArrowDropDownLine } from "react-icons/ri";

const categories = ["all courses", "My Lists", "Wishlist", "Archived", "Learning tools"];

const Wishlist: React.FC = () => {
  document.title = "My learning | Udemy";
  const [isLoading, setLoading] = useState(false);
  const [categoryChoosed, setCategoryChoosed] = useState<string | null>("");

  const coursesBought = useSelector(
    (state: RootState) =>
      state?.user.coursesBought as Array<{
        courseId: string;
        boughtAt: string;
      }>
  );

  const handleClickedCategory = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;

    const btn = target.closest("button");

    if (btn) {
      setCategoryChoosed(btn.innerText);
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="flex flex-col items-start justify-start bg-watchUdemyCourse p-[1em] text-white">
      <div>
        <h1 className=" my-[1.5em] mb-[1em] ml-[1em] ">My learning</h1>
        <div
          className="ml-[3em] flex  items-start justify-start gap-[1em]"
          onClick={handleClickedCategory}
        >
          {categories.map((category) => (
            <div className="flex flex-col" key={category} id={category}>
              <button className="pb-1 font-bold focus:outline-none">{category}</button>
              <hr
                className={`w-full border-[3px]  ${category === categoryChoosed ? "border-white" : "border-[#1D1E27]"}`}
              />
            </div>
          ))}
        </div>
      </div>
      {isLoading ? (
        <div className="w-full bg-white">
          <Loader hSize="1000px" useSmallLoading={false} />
        </div>
      ) : (
        <div
          className={`${
            coursesBought.length > 0
              ? `flex w-full flex-col items-center justify-center bg-white text-center text-black`
              : `flex h-[400px] w-full flex-col items-center justify-center bg-white text-center text-black`
          }`}
        >
          {coursesBought && coursesBought.length > 0 ? (
            <div className="flex w-full flex-col items-start justify-start">
              <div className="mt-[1em] flex items-center justify-between gap-[1em] px-[3em]">
                <div className="flex w-full  items-center justify-center gap-[1em]">
                  <div className="flex flex-col items-start justify-start gap-[0.5em]">
                    <p>Sort by</p>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex  items-center gap-[0.5em]  rounded-[0.2em] border border-btnColor p-[0.7em] font-sans font-extrabold text-btnColor hover:bg-purpleHoverBtn">
                        Recently Accessed
                        <RiArrowDropDownLine className="text-[1.5em]" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                          Recently Enrolled
                        </DropdownMenuLabel>
                        <DropdownMenuItem className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                          Title: A-to-Z
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                          Title: Z-to-A
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                          Development
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.5em]">
                    <p>Filter by</p>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex w-min  items-center gap-[0.5em] rounded-[0.2em] border border-btnColor p-[0.7em] font-sans font-extrabold text-btnColor hover:bg-purpleHoverBtn">
                        Categories
                        <RiArrowDropDownLine className="text-[1.5em]" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[250px]">
                        <DropdownMenuLabel className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 font-normal text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                          Favorites
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="text-gray-800" />
                        <DropdownMenuItem className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                          All Categories
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                          Design
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                          Development
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                          IT & Software
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="text-gray-800" />
                        <DropdownMenuItem className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                          Archived
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className=" flex w-min  items-center gap-[0.5em] rounded-[0.2em] border  border-btnColor p-[0.7em] font-sans font-extrabold text-btnColor hover:bg-purpleHoverBtn">
                      Progress
                      <RiArrowDropDownLine className="text-[1.5em]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                        Not Started
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                        In Progress
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger className=" flex w-min  items-center gap-[0.5em] rounded-[0.2em] border  border-btnColor p-[0.7em] font-sans font-extrabold text-btnColor hover:bg-purpleHoverBtn">
                      Instructor
                      <RiArrowDropDownLine className="text-[1.5em]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="h-[300px] w-[250px] overflow-y-auto">
                      <DropdownMenuItem className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                        Not Started
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex w-full cursor-pointer  items-center gap-[1em] rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600">
                        In Progress
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <button className="cursor-not-allowed border-none font-sans font-extrabold text-gray-400 focus:outline-none">
                    Reset
                  </button>
                  <div className="flex  items-center justify-center gap-[0.5em]">
                    <form className="flex  items-center justify-center gap-[0.5em]">
                      <input
                        type="text"
                        placeholder="Search my courses"
                        className="rounded-[0.2em] border border-gray-400 bg-white p-[0.7em] placeholder:text-gray-600"
                      />
                      <button className="rounded-[0.2em] bg-btnColor p-[0.7em] hover:bg-[#892de1] focus:outline-none">
                        <IoMdSearch className="text-[1.5em] text-white" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="grid w-full grid-cols-4 gap-4 p-[5em] text-center">
                {[...coursesBought]
                  .sort(
                    (a, b) =>
                      new Date((b as { boughtAt: string }).boughtAt).getTime() -
                      new Date(a.boughtAt).getTime()
                  )
                  .map((courseBought) => (
                    <div key={courseBought.courseId}>
                      <ItemInCart
                        showInstructor={false}
                        rowPrices={false}
                        showHR={true}
                        courseImgSize="w-full"
                        courseId={courseBought.courseId}
                        showFullPrice={false}
                        isColCourseBox={true}
                        hide={false}
                        showDisPrice={false}
                        shortCutInstructor={true}
                        shortcutTitle={false}
                        chooseFlex={"flex "}
                        itemsPosition="start"
                        textColor="text-black"
                      />
                    </div>
                  ))}
              </div>
            </div>
          ) : (
            <Button className="mt-[10em] rounded-[0.2em] font-sans font-extrabold focus:outline-none">
              <Link to="/">Browse all courses</Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
