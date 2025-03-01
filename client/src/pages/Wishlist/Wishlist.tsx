import Loader from "@/components/Loader/Loader";
import ItemInCart from "@/components/Navbar/Cart/ItemInCart/ItemInCart";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux";
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RiArrowDropDownLine } from "react-icons/ri";

const Wishlist: React.FC = () => {
  document.title = "My learning | Udemy";
  const [isLoading, setLoading] = useState(false);

  const coursesBought = useSelector(
    (state: RootState) => state.user.coursesBought
  );

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="flex flex-col items-start justify-start p-[1em] bg-[#1d1e27] text-white">
      <div className="px-[15em]">
        <h1 className="my-[1.5em] mb-[1em] ">My learning</h1>
        <div className="flex flex-row items-start justify-start gap-[1em]">
          <b>All courses</b>
          <b>My Lists</b>
          <b>Wishlist</b>
          <b>Archived</b>
          <b>Learning tools</b>
        </div>
      </div>
      {isLoading ? (
        <div className="bg-white w-full">
          <Loader hSize="1000px" useSmallLoading={false} />
        </div>
      ) : (
        <div
          className={`${
            coursesBought.length > 0
              ? `bg-white w-full text-center text-black flex flex-col items-center justify-center`
              : `bg-white w-full h-[400px] text-center text-black flex flex-col items-center justify-center`
          }`}
        >
          {coursesBought && coursesBought.length > 0 ? (
            <div className="w-full flex flex-col items-start justify-start">
              <div className="flex flex-row items-center justify-between gap-[1em] w-full px-[3em] mt-[1em]">
                <div className="flex flex-row items-center justify-center gap-[1em] w-full">
                  <div className="flex flex-col items-start justify-start gap-[0.5em]">
                    <p>Sort by</p>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex flex-row items-center gap-[0.5em]  font-bold hover:bg-purpleHoverBtn text-btnColor border border-btnColor rounded-[0.2em] p-[0.7em]">
                        Recently Accessed
                        <RiArrowDropDownLine className="text-[1.5em]" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                          Recently Enrolled
                        </DropdownMenuLabel>
                        <DropdownMenuItem className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                          Title: A-to-Z
                        </DropdownMenuItem>
                        <DropdownMenuItem className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                          Title: Z-to-A
                        </DropdownMenuItem>
                        <DropdownMenuItem className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                          Development
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.5em]">
                    <p>Filter by</p>
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex flex-row items-center gap-[0.5em] w-min font-bold hover:bg-purpleHoverBtn text-btnColor border border-btnColor rounded-[0.2em] p-[0.7em]">
                        Categories
                        <RiArrowDropDownLine className="text-[1.5em]" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[250px]">
                        <DropdownMenuLabel className="font-normal w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                          Favorites
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator className="text-gray-800" />
                        <DropdownMenuItem className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                          All Categories
                        </DropdownMenuItem>
                        <DropdownMenuItem className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                          Design
                        </DropdownMenuItem>
                        <DropdownMenuItem className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                          Development
                        </DropdownMenuItem>
                        <DropdownMenuItem className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                          IT & Software
                        </DropdownMenuItem>
                        <DropdownMenuSeparator className="text-gray-800" />
                        <DropdownMenuItem className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                          Archived
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="mt-[2em] flex flex-row items-center gap-[0.5em] w-min font-bold hover:bg-purpleHoverBtn  text-btnColor border border-btnColor rounded-[0.2em] p-[0.7em]">
                      Progress
                      <RiArrowDropDownLine className="text-[1.5em]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                        Not Started
                      </DropdownMenuItem>
                      <DropdownMenuItem className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                        In Progress
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <DropdownMenu>
                    <DropdownMenuTrigger className="mt-[2em] flex flex-row items-center gap-[0.5em] w-min font-bold hover:bg-purpleHoverBtn  text-btnColor border border-btnColor rounded-[0.2em] p-[0.7em]">
                      Instructor
                      <RiArrowDropDownLine className="text-[1.5em]" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[250px] h-[300px] overflow-y-auto">
                      <DropdownMenuItem className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                        Not Started
                      </DropdownMenuItem>
                      <DropdownMenuItem className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
                        In Progress
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  <button className=" mt-[2em] font-bold text-gray-400 cursor-not-allowed border-none">
                    Reset
                  </button>
                </div>

                <div className="flex flex-row items-center justify-center gap-[0.5em]">
                  <form className="flex flex-row items-center justify-center gap-[0.5em]">
                    <input
                      type="text"
                      placeholder="Search my courses"
                      className="bg-white border border-gray-400 p-[0.7em] rounded-[0.2em] placeholder:text-gray-600"
                    />
                    <button className="hover:bg-[#892de1] bg-btnColor p-[0.7em] rounded-[0.2em]">
                      <IoMdSearch className="text-white text-[1.5em]" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="grid grid-cols-4 gap-4 w-full text-center p-[5em]">
                {coursesBought.map((courseBought) => (
                  <div key={courseBought}>
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
                      chooseFlex={"flex flex-row"}
                      itemsPosition="start"
                      textColor="text-black"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Button className="font-bold rounded-[0.2em] mt-[10em]">
              <Link to="/">Browse all courses</Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
