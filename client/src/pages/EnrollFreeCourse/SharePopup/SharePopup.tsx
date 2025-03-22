import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useLocation } from "react-router-dom";

const SharePopup = ({ isClicked, setClicked }) => {
  const location = useLocation();

  const handleCopyText = () => {
    navigator.clipboard.writeText(location.pathname);
  };

  return (
    <div>
      <Dialog open={isClicked} onOpenChange={setClicked}>
        <DialogContent className="w-[500px]">
          <DialogHeader>
            <DialogTitle className="font-extrabold">
              Share this course
            </DialogTitle>
            <DialogDescription>
              <div className="flex w-full flex-row gap-[0.4em]">
                <input
                  type="text"
                  value={location.pathname}
                  disabled={true}
                  className="h-[2.5em] w-full rounded-[0.2em] border border-gray-300 bg-white"
                />
                <button
                  onClick={handleCopyText}
                  className="mr-4 rounded-[0.2em] bg-purple-600 px-6 py-2 font-extrabold text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Copy
                </button>
              </div>
              <div className="mt-[0.7em] flex flex-row items-center justify-center gap-[1em]">
                <div className="cursor-pointer rounded-[100em] border border-purple-900 p-[0.5em] hover:bg-purple-200">
                  <FaFacebook className="text-[1.3em] text-purple-600" />
                </div>
                <div className="cursor-pointer rounded-[100em] border border-purple-900 p-[0.5em] hover:bg-purple-200">
                  <FaSquareXTwitter className="text-[1.3em] text-purple-600" />
                </div>
                <div className="cursor-pointer rounded-[100em] border border-purple-900 p-[0.5em] hover:bg-purple-200">
                  <IoMdMail className="text-[1.3em] text-purple-600" />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SharePopup;
