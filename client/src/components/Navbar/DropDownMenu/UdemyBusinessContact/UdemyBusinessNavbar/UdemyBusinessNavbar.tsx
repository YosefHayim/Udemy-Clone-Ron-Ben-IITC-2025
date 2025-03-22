import { Button } from "@/components/ui/button";
import { TbWorld } from "react-icons/tb";

const UdemyBusinessNavbar = () => {
  return (
    <div className="w-full">
      <div className="relative w-full p-[1em]">
        <div className="flex w-full flex-row items-center justify-between">
          <div className="flex w-full items-center gap-[1em]">
            {/* <img src={udemyBusinessLogo} alt="" /> */}
            <p>What we do</p>
            <p>How we do xwit</p>
            <p>Resources</p>
            <p>Plans</p>
          </div>
          <div className="flex w-full items-center justify-end gap-[1em]">
            <Button className="bg-white font-bold text-black shadow-none hover:bg-white hover:text-btnColor focus:outline-none">
              Login
            </Button>
            <Button className="h-[3em] rounded-[0.2em] bg-btnColor font-bold text-white shadow-none hover:bg-black focus:outline-none">
              Get started
            </Button>
            <div className="rounded-[0em bg-white] border border-black p-[1em] shadow-none hover:bg-white">
              <TbWorld className="text-[1.5em] text-black" />
            </div>
          </div>
        </div>
        <hr className="mt-[1em] w-full border" />
      </div>
    </div>
  );
};

export default UdemyBusinessNavbar;
