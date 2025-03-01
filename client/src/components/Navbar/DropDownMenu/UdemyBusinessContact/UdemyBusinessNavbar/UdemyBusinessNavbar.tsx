import { Button } from "@/components/ui/button";
import { TbWorld } from "react-icons/tb";

const UdemyBusinessNavbar = () => {
  return (
    <div className="w-full">
      <div className="relative w-full p-[1em]">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex items-center gap-[1em] w-full">
            {/* <img src={udemyBusinessLogo} alt="" /> */}
            <p>What we do</p>
            <p>How we do xwit</p>
            <p>Resources</p>
            <p>Plans</p>
          </div>
          <div className="flex items-center justify-end gap-[1em] w-full">
            <Button className="text-black bg-white hover:bg-white shadow-none font-bold hover:text-btnColor">
              Login
            </Button>
            <Button className="font-bold bg-btnColor text-white shadow-none hover:bg-black rounded-[0.2em] h-[3em]">
              Get started
            </Button>
            <div className="rounded-[0em bg-white] border border-black hover:bg-white shadow-none p-[1em]">
              <TbWorld className="text-black text-[1.5em]" />
            </div>
          </div>
        </div>
        <hr className="border w-full mt-[1em]" />
      </div>
    </div>
  );
};

export default UdemyBusinessNavbar;
