import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IoIosShareAlt, IoMdFolder } from "react-icons/io";
import { GoPlus } from "react-icons/go";
import { MdOutlineStar } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

const OptionsMyLearning = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <BsThreeDotsVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-[9em] mt-[0.5em] w-[250px] rounded-[0.5em] border border-gray-200 ">
          <DropdownMenuLabel className="text-grayNavbarTxt">
            Lists
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <div className="bg-none w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
              <IoIosShareAlt />
              <p>Share</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
              <GoPlus />
              <p>Create new List</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
              <MdOutlineStar />
              <p>Favorite</p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <div className="w-full rounded-[0.2em] px-4 py-2 text-gray-700 hover:bg-purpleHoverBtn hover:text-purple-600 cursor-pointer flex flex-row items-center gap-[1em]">
              <IoMdFolder />
              <p>Archive</p>
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default OptionsMyLearning;
